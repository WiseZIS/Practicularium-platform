# PRACTICULARIUM Platform 2.0

# Fiscal Engine Architecture v1.0

---

## Document Information

**Document:** Fiscal Engine Architecture

**Version:** 1.0

**Status:** Approved

**Module:** Fiscal Engine

**Applies to:** PRACTICULARIUM Platform 2.0

---

# 1. Purpose

This document defines the architecture of the Fiscal Engine used by PRACTICULARIUM Platform 2.0.

Fiscal Engine is responsible for coordinating the fiscalization process after a successful payment and for integrating with external Fiscal Providers (ПРРО).

This document describes architectural principles rather than implementation details.

---

# 2. Responsibilities

Fiscal Engine is responsible for:

- coordinating the fiscalization workflow;
- preparing fiscal requests;
- invoking the configured Fiscal Provider;
- processing provider responses;
- storing fiscal metadata in OMS;
- initiating customer receipt delivery.

Fiscal Engine does NOT:

- process payments;
- manage shipment;
- generate PDF documents itself;
- perform fiscal registration internally.

Those responsibilities belong to specialized modules or the external Fiscal Provider.

---

# 3. Architecture Overview

```
Funds Received

        │

        ▼

Fiscal Engine

        │

        ▼

Fiscal Builder

        │

        ▼

Fiscal Service

        │

        ▼

Fiscal Provider

        │

        ▼

Checkbox API

        │

        ▼

Fiscal Result Builder

        │

        ▼

Save Fiscal Result

        │

        ▼

OMS

        │

        ▼

Email Service

        │

        ▼

Customer
```

---

# 4. Module Structure

```
netlify/lib/fiscal/

│

├── fiscal-engine.js

├── fiscal-builder.js

├── fiscal-result-builder.js

├── fiscal-status.js

├── save-fiscal-result.js

│

├── fiscal-service.js        (future)

├── fiscal-config.js         (future)

│

└── providers/

        checkbox/

            provider.js

            client.js

            requests/

            responses/
```

---

# 5. Module Responsibilities

## fiscal-engine.js

Coordinates the entire fiscalization process.

Responsibilities:

- starts fiscalization;
- invokes Builder;
- invokes Service;
- invokes Result Builder;
- stores results;
- triggers further business processes.

---

## fiscal-builder.js

Transforms OMS Order into an internal Fiscal Request.

Responsible only for outgoing data preparation.

---

## fiscal-service.js

Provides an abstraction over Fiscal Providers.

Responsibilities:

- selects configured provider;
- invokes provider;
- returns normalized response.

Does not contain business logic.

---

## Fiscal Provider

Communicates with external Fiscal APIs.

Current implementation:

- Checkbox.

Future implementations may include:

- Cashalot;
- Вчасно.Каса;
- other certified ПРРО providers.

---

## fiscal-result-builder.js

Transforms external provider response into OMS Internal Fiscal Model.

OMS never depends directly on external API structures.

---

## save-fiscal-result.js

Stores fiscal metadata inside OMS.

Responsible only for persistence.

---

## fiscal-status.js

Stores Fiscal Status constants.

Current statuses:

- NOT_CREATED
- CREATING
- CREATED
- EMAILED
- ERROR

---

# 6. Architectural Rules

## FE-01 — Single Responsibility

Each Fiscal Engine module has exactly one responsibility.

One file = one responsibility.

---

## FE-02 — Service Layer

Fiscal Engine never communicates directly with a Fiscal Provider.

Communication always follows:

```
Engine

↓

Service

↓

Provider
```

---

## FE-03 — Provider Independence

OMS never depends on Checkbox API structures.

Builders convert OMS data into Provider format.

Result Builders convert Provider responses into OMS format.

---

## FE-04 — Idempotency

One Order may generate only one Fiscal Receipt.

Before creating a new receipt, Fiscal Engine must verify whether a fiscal receipt already exists.

Repeated requests must never create duplicate fiscal receipts.

---

## FE-05 — OMS Is the Source of Truth

After successful fiscalization OMS becomes the primary source of fiscal information.

OMS stores:

- receipt number;
- fiscal number;
- receipt URL;
- PDF reference;
- creation time;
- delivery status.

Subsequent business processes rely on OMS rather than repeatedly querying the Fiscal Provider.

---

## FE-06 — Immutable Fiscal History

Fiscal information must never be deleted or overwritten.

Each significant event should be recorded as part of the fiscal history.

Examples:

- Receipt Created
- Receipt Sent
- Receipt Re-sent
- Receipt Opened
- Receipt Downloaded

This approach supports auditing and troubleshooting.

---

## FE-07 — OMS Orchestrates Business Processes

OMS coordinates the business workflow.

Fiscal Engine performs fiscalization.

Email Service delivers notifications.

Shipment Engine manages shipment.

Each module performs only its own responsibility.

OMS determines which business process should execute next.

---

## FE-08 — Builder Performs No Calculations

Fiscal Builder must never perform business calculations.

Builder consumes already prepared data from other modules.

Fiscal Builder does NOT:

- calculate prices;
- calculate taxes;
- determine discounts;
- modify quantities;
- determine payment methods.

Builder is responsible only for transforming the OMS internal model into the Fiscal Provider request format.

---

## FE-09 — Builder Contains No Business Rules

Fiscal Builder must not contain business decision logic.

All business rules must be resolved before invoking Builder.

Builder is responsible only for assembling the request structure for the Fiscal Provider.

---

## FE-10 — Builder Produces an Internal Fiscal Request

Fiscal Builder must never build a Provider-specific API request.

Instead, Builder creates the PRACTICULARIUM Internal Fiscal Request model.

Transformation of the internal model into the Provider-specific format is performed by the selected Provider or its Request Builder.

This approach keeps OMS independent from external APIs and allows new Fiscal Providers to be added without modifying the platform business logic.

---

# 7. Business Workflow

```
Order Created

↓

Payment Confirmed

↓

Funds Received

↓

Fiscal Engine

↓

Fiscal Provider

↓

Fiscal Receipt Created

↓

OMS Updated

↓

Email Service

↓

Receipt Delivered

↓

Business Process Continues
```

---

# 8. Extensibility

Future versions of Fiscal Engine may include:

- multiple Fiscal Providers;
- automatic provider selection;
- retry mechanism;
- provider failover;
- receipt delivery monitoring;
- receipt acknowledgement tracking;
- fiscal analytics;
- audit logging.

The architecture should support these extensions without redesigning the existing modules.

---

# 9. Guiding Principles

Fiscal Engine follows these engineering principles:

- separation of responsibilities;
- provider independence;
- internal data model ownership;
- business-driven architecture;
- extensibility;
- maintainability;
- predictable module structure.

---

# 10. Version History

| Version | Description |
|----------|----------------------------------------------|
| 1.0 | Initial Fiscal Engine Architecture |

---

============================================================

PRACTICULARIUM Platform 2.0

Architecture Documentation

Approved

© Z.I.S. Publishing

============================================================









# PRACTICULARIUM Platform 2.0

# Архітектура Fiscal Engine v1.0

---

## Інформація про документ

**Документ:** Архітектура Fiscal Engine

**Версія:** 1.0

**Статус:** Затверджено

**Модуль:** Fiscal Engine

**Платформа:** PRACTICULARIUM Platform 2.0

---

# 1. Призначення

Цей документ визначає архітектуру Fiscal Engine платформи PRACTICULARIUM Platform 2.0.

Fiscal Engine відповідає за координацію процесу фіскалізації після підтвердженого надходження коштів та забезпечує інтеграцію із зовнішніми програмними реєстраторами розрахункових операцій (ПРРО).

Документ описує архітектурні принципи та взаємодію модулів, а не деталі програмної реалізації.

---

# 2. Відповідальність Fiscal Engine

Fiscal Engine відповідає за:

- координацію процесу фіскалізації;
- підготовку даних для формування чека;
- взаємодію з Фіскальним Провайдером;
- отримання результату реєстрації;
- збереження службової інформації про чек в OMS;
- запуск автоматичного надсилання електронного чека покупцю.

Fiscal Engine НЕ виконує:

- приймання платежів;
- управління доставкою;
- створення PDF-документів;
- самостійну фіскальну реєстрацію.

Ці функції виконують відповідні модулі або зовнішній ПРРО.

---

# 3. Загальна архітектура

```
Підтверджене надходження коштів

                │

                ▼

          Fiscal Engine

                │

                ▼

          Fiscal Builder

                │

                ▼

          Fiscal Service

                │

                ▼

        Fiscal Provider

                │

                ▼

          Checkbox API

                │

                ▼

     Fiscal Result Builder

                │

                ▼

      Save Fiscal Result

                │

                ▼

               OMS

                │

                ▼

         Email Service

                │

                ▼

             Покупець
```

---

# 4. Структура модуля

```
netlify/lib/fiscal/

│

├── fiscal-engine.js

├── fiscal-builder.js

├── fiscal-result-builder.js

├── fiscal-status.js

├── save-fiscal-result.js

│

├── fiscal-service.js          (майбутня реалізація)

├── fiscal-config.js           (майбутня реалізація)

│

└── providers/

        checkbox/

            provider.js

            client.js

            requests/

            responses/
```

---

# 5. Відповідальність модулів

## fiscal-engine.js

Координує повний процес фіскалізації.

Відповідає за:

- запуск процесу;
- виклик Builder;
- виклик Service;
- виклик Result Builder;
- збереження результату;
- запуск наступних бізнес-процесів.

---

## fiscal-builder.js

Перетворює внутрішню модель замовлення OMS у структуру даних, необхідну Фіскальному Провайдеру.

Відповідає виключно за підготовку вихідних даних.

---

## fiscal-service.js

Забезпечує єдиний інтерфейс роботи з Фіскальними Провайдерами.

Відповідає за:

- вибір активного Провайдера;
- передачу запиту;
- повернення результату.

Не містить бізнес-логіки.

---

## Fiscal Provider

Забезпечує взаємодію із зовнішнім API ПРРО.

Поточна реалізація:

- Checkbox.

Майбутні реалізації:

- Cashalot;
- Вчасно.Каса;
- інші сертифіковані ПРРО.

---

## fiscal-result-builder.js

Перетворює відповідь ПРРО у внутрішню модель Fiscal OMS.

OMS ніколи не залежить безпосередньо від структури зовнішнього API.

---

## save-fiscal-result.js

Зберігає службову інформацію про чек у OMS.

Відповідає виключно за запис результатів.

---

## fiscal-status.js

Містить перелік статусів Fiscal Engine.

Поточні статуси:

- NOT_CREATED
- CREATING
- CREATED
- EMAILED
- ERROR

---

# 6. Архітектурні правила

## FE-01 — Єдина відповідальність

Кожен модуль Fiscal Engine має лише одну відповідальність.

Один файл — одна відповідальність.

---

## FE-02 — Service Layer

Fiscal Engine ніколи не звертається безпосередньо до Фіскального Провайдера.

Взаємодія здійснюється виключно за схемою:

```
Engine

↓

Service

↓

Provider
```

---

## FE-03 — Незалежність від Провайдера

OMS не залежить від структури API Checkbox.

Builder перетворює внутрішню модель OMS у формат Провайдера.

Result Builder перетворює відповідь Провайдера у внутрішню модель OMS.

---

## FE-04 — Ідемпотентність

Одне замовлення може мати лише один фіскальний чек.

Перед створенням нового чека Fiscal Engine зобов'язаний перевірити, чи вже існує зареєстрований чек.

Повторне виконання операції не повинно створювати дублікати.

---

## FE-05 — OMS є джерелом істини

Після успішної фіскалізації саме OMS стає основним джерелом інформації про чек.

OMS зберігає:

- номер чека;
- фіскальний номер;
- URL чека;
- посилання на PDF;
- дату створення;
- статуси бізнес-процесу.

Подальші процеси працюють із даними OMS, а не виконують повторні запити до ПРРО.

---

## FE-06 — Незмінність історії

Історія фіскалізації не повинна видалятися або перезаписуватися.

Кожна подія додається до журналу.

Приклади:

- Receipt Created;
- Receipt Sent;
- Receipt Re-sent;
- Receipt Opened;
- Receipt Downloaded.

Такий підхід забезпечує аудит та спрощує аналіз роботи системи.

---

## FE-07 — OMS керує бізнес-процесами

OMS є координатором бізнес-процесів.

Fiscal Engine відповідає лише за фіскалізацію.

Email Service відповідає лише за надсилання повідомлень.

Shipment Engine відповідає лише за логістику.

Кожен модуль виконує виключно власну функцію.

---

## FE-08 — Builder не виконує обчислень

Fiscal Builder не повинен виконувати жодних бізнес-обчислень.

Builder використовує виключно вже підготовлені дані інших модулів.

Fiscal Builder НЕ:

- розраховує ціну;
- розраховує податки;
- визначає знижки;
- змінює кількість;
- визначає спосіб оплати.

Builder виконує лише перетворення внутрішньої моделі OMS у формат Фіскального Провайдера.

---

## FE-09 — Builder не містить бізнес-правил

Fiscal Builder не приймає бізнес-рішень.

Усі бізнес-правила повинні бути виконані до моменту виклику Builder.

Builder лише формує структуру запиту для Фіскального Провайдера.

---

## FE-10 — Builder формує внутрішню модель Fiscal Request

Fiscal Builder не формує запит безпосередньо до API Фіскального Провайдера.

Builder створює внутрішню модель Fiscal Request платформи PRACTICULARIUM.

Перетворення внутрішньої моделі у формат конкретного Провайдера виконується відповідним Provider або його Request Builder.

Такий підхід забезпечує незалежність OMS від API зовнішніх сервісів та спрощує підключення нових ПРРО без зміни бізнес-логіки платформи.

---

# 7. Бізнес-процес

```
Створення замовлення

↓

Підтвердження оплати

↓

Підтверджене надходження коштів

↓

Fiscal Engine

↓

Фіскальний Провайдер

↓

Формування чека

↓

Оновлення OMS

↓

Email Service

↓

Надсилання чека покупцю

↓

Подальший бізнес-процес
```

---

# 8. Подальший розвиток

Архітектура передбачає можливість подальшого розвитку без зміни основної структури.

Заплановані можливості:

- підтримка декількох ПРРО;
- автоматичний вибір Провайдера;
- повторні спроби фіскалізації;
- резервні Провайдери;
- журнал надсилання чеків;
- контроль відкриття електронних чеків;
- підтвердження ознайомлення покупця;
- аналітика та аудит.

---

# 9. Основні принципи

Fiscal Engine будується на таких принципах:

- розподіл відповідальності;
- незалежність від зовнішніх Провайдерів;
- власна внутрішня модель даних;
- бізнес-орієнтована архітектура;
- масштабованість;
- підтримуваність;
- передбачувана структура модулів.

---

# 10. Історія версій

| Версія | Опис |
|---------|----------------------------------------------|
| 1.0 | Початкова редакція архітектури Fiscal Engine |

---

============================================================

PRACTICULARIUM Platform 2.0

Architecture Documentation

Approved

© Z.I.S. Publishing

============================================================