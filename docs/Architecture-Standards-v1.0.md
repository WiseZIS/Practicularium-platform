###############################################################################
#                                                                             #
#                     PRACTICULARIUM PLATFORM                                 #
#                                                                             #
#                 Architecture Standards v1.0                                 #
#                                                                             #
###############################################################################

**Document ID:** AS-01

**Version:** 1.0

**Status:** APPROVED

**Classification:** Core Architecture Document

**Project:** PRACTICULARIUM Platform

**Author:** Z.I.S.-Consulting

**Document Type:** Architecture Standard

**Created:** July 2026

---

# DOCUMENT PURPOSE

Architecture Standards v1.0 establishes the mandatory architectural principles
for every component of the PRACTICULARIUM Platform.

The document defines:

- architectural philosophy;
- software development principles;
- interaction between platform layers;
- module responsibilities;
- service design rules;
- long-term scalability principles.

Every future module of the platform must comply with these standards.

---

###############################################################################
# 1. ARCHITECTURAL PHILOSOPHY
###############################################################################

The PRACTICULARIUM Platform is designed according to one fundamental principle:

> **Architecture is created before implementation.**

Business processes define architecture.

Architecture defines modules.

Modules define services.

Services define implementation.

Implementation never defines architecture.

Every architectural decision must improve one or more of the following:

- simplicity;
- scalability;
- maintainability;
- readability;
- predictability.

Architectural consistency has higher priority than implementation speed.

---

###############################################################################
# 2. PLATFORM PRINCIPLES
###############################################################################

The platform follows five strategic principles.

## Principle 1

Business Process First.

The Controlled Sales Process determines platform behaviour.

Code implements business.

Business never adapts to code.

---

## Principle 2

Stable Architecture.

Architecture should remain stable for many years.

Only implementations may change.

---

## Principle 3

Single Responsibility.

Every module performs exactly one responsibility.

Complex systems are built from simple independent modules.

---

## Principle 4

Service-Oriented Design.

All business operations are performed through Service Layer.

No business rules exist outside Services.

---

## Principle 5

Replace Implementations — Never Architecture.

Stub implementation

↓

API implementation

↓

Optimized implementation

must always preserve identical public interfaces.

---

###############################################################################
# 3. ARCHITECTURE STANDARDS
###############################################################################

# AS-01
## Repository Layer contains only data access.

### Purpose

Repository modules provide communication with data sources.

Repositories never contain business rules.

---

### Repository Responsibilities

Allowed:

- Create
- Read
- Update
- Delete

Examples:

- saveOrder()
- getOrders()
- getOrderByNumber()
- saveOrderStatus()

---

### Repository MUST NOT

- validate workflow;
- calculate delivery;
- calculate payment;
- send email;
- create notifications;
- make business decisions.

Repositories never decide.

Repositories execute.

---

### Architectural Scheme

```text
Presentation Layer

        ↓

Service Layer

        ↓

Repository Layer

        ↓

Database
```

---

# AS-02
## Business Logic belongs exclusively to Service Layer

### Purpose

Every business decision is implemented only inside Services.

---

### Examples

Correct:

- Order Status Service
- Delivery Service
- Payment Service
- Tracking Service
- Email Service

---

### Service Responsibilities

Service modules may:

- validate workflow;
- calculate delivery;
- calculate payment;
- communicate with external APIs;
- generate notifications;
- build business objects;
- orchestrate repositories.

---

### Service MUST NOT

- communicate directly with User Interface;
- contain SQL;
- manipulate HTML;
- manipulate browser DOM.

---

### Architectural Scheme

```text
OMS

↓

Service Layer

↓

Repository

↓

Database
```

---

# AS-03
## Every Service accepts exactly one Object

### Purpose

Public Service interfaces must remain stable.

Future platform expansion must never require changing Service signatures.

---

### Correct

```javascript
calculateDelivery({

    carrier,

    city,

    quantity,

    weight,

    paymentMethod

});
```

---

### Incorrect

```javascript
calculateDelivery(

    carrier,

    city,

    quantity,

    weight,

    paymentMethod

);
```

---

### Advantages

✔ unlimited extensibility

✔ readable code

✔ backward compatibility

✔ stable interfaces

✔ simplified testing

---

### Future Extension Example

```javascript
calculateDelivery({

    carrier,

    city,

    quantity,

    weight,

    paymentMethod,

    insurance,

    declaredValue,

    deliveryType,

    preferredDate

});
```

Notice:

The interface remains unchanged.

Only the object receives additional properties.

---

# AS-04
## No Magic Strings

### Purpose

Business constants must never be duplicated throughout the project.

Every constant belongs to a dedicated Dictionary module.

---

### Correct

```javascript
ORDER_STATUS.NEW

ORDER_STATUS.SHIPPED

CARRIERS.NOVA_POSHTA

PAYMENT_METHODS.FULL_PREPAYMENT
```

---

### Incorrect

```javascript
"NEW"

"SHIPPED"

"Нова Пошта"

"Повна передоплата"
```

---

### Advantages

✔ centralized management

✔ typo prevention

✔ localization readiness

✔ easier maintenance

✔ cleaner architecture

---

### Dictionary Examples

```text
order-status.js

carriers.js

payment-methods.js

currencies.js

languages.js

countries.js

shipment-types.js
```

Every Dictionary exports:

```javascript
Object.freeze(...)
```

---

###############################################################################
# AS-05
###############################################################################

## Every Dictionary is an Independent Module

### Purpose

Business constants must be centralized.

Every dictionary represents a single business domain.

A Dictionary is considered an independent architectural module.

---

### Examples

```text
order-status.js

carriers.js

payment-methods.js

currencies.js

languages.js

countries.js

shipment-types.js

notification-types.js
```

---

### Dictionary Requirements

Every Dictionary:

• contains only constants

• contains no business logic

• contains no functions

• exports immutable objects

---

### Correct

```javascript
const ORDER_STATUS = Object.freeze({

    NEW: "NEW",

    CONFIRMED: "CONFIRMED",

    SHIPPED: "SHIPPED"

});
```

---

### Incorrect

```javascript
const ORDER_STATUS = {

    NEW: "NEW"

};

ORDER_STATUS.SHIPPED = "SHIPPED";
```

---

### Advantages

✔ centralized configuration

✔ immutable business constants

✔ easier maintenance

✔ easier localization

✔ easier API integration

---

###############################################################################
# AS-06
###############################################################################

## Every Service Returns a Result Object

### Purpose

Every Service communicates with the platform using one unified response contract.

OMS never needs to know how an individual Service works internally.

---

### Success Response

```javascript
{

    success: true,

    data: {

        ...

    }

}
```

---

### Error Response

```javascript
{

    success: false,

    error: {

        code: "...",

        message: "..."

    }

}
```

---

### Example

```javascript
const result = await calculateDelivery(...);

if (!result.success){

    ...

}

const price = result.data.delivery.price;
```

---

### Advantages

✔ predictable APIs

✔ unified Service communication

✔ easier testing

✔ easier logging

✔ easier monitoring

✔ future microservice compatibility

---

###############################################################################
# AS-07
###############################################################################

## OMS Communicates only with Services

### Purpose

OMS is responsible only for presentation and business orchestration.

OMS must never communicate directly with:

• Repository

• Database

• Supabase

• SQL

• Nova Poshta API

• Bank API

• Tracking API

---

### Correct Architecture

```text
OMS

↓

Service Layer

↓

Repository

↓

Database
```

---

### Incorrect Architecture

```text
OMS

↓

Repository

↓

Database
```

---

### Advantages

✔ separation of responsibilities

✔ lower coupling

✔ easier testing

✔ reusable Services

✔ independent UI

---

###############################################################################
# AS-08
###############################################################################

## Single Responsibility Principle

### Purpose

One module performs one responsibility.

Nothing more.

---

### Correct

```text
delivery-service.js

↓

Delivery calculation
```

---

### Incorrect

```text
delivery-service.js

↓

Delivery calculation

Shipment creation

Email sending

Tracking
```

---

### Rule

If a module starts solving two different business problems,

it should probably become two modules.

---

### Advantages

✔ simpler code

✔ easier testing

✔ easier maintenance

✔ easier scalability

---

###############################################################################
# AS-09
###############################################################################

## External Integrations are Isolated

### Purpose

The platform architecture must never depend on external providers.

Only Services know how external APIs work.

OMS never communicates directly with:

• Nova Poshta

• Ukrposhta

• NovaPay

• Banks

• Payment Gateways

• Analytics Providers

---

### Architecture

```text
OMS

↓

Delivery Service

↓

Nova Poshta API
```

or

```text
OMS

↓

Delivery Service

↓

Stub
```

or

```text
OMS

↓

Delivery Service

↓

International Carrier
```

OMS remains unchanged.

Only the Service implementation changes.

---

### Advantages

✔ provider independence

✔ easy replacement

✔ safer development

✔ easier testing

---

###############################################################################
# AS-10
###############################################################################

## Architecture Before Code

### Purpose

Every feature begins with architecture.

Never with implementation.

---

### Mandatory Development Sequence

1.

Business Objective

↓

2.

Architecture

↓

3.

Public Interface

↓

4.

Module Design

↓

5.

Implementation

↓

6.

Testing

↓

7.

Documentation

---

### Rule

Code is written only after the architecture has been approved.

---

### Advantages

✔ fewer refactorings

✔ cleaner architecture

✔ faster development

✔ lower technical debt

---

###############################################################################
# 4. PLATFORM LAYER ARCHITECTURE
###############################################################################

The PRACTICULARIUM Platform follows a layered architecture.

Every layer has a clearly defined responsibility.

```
Presentation Layer
        │
        ▼
OMS / Website / Future Mobile Applications
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
Database / External APIs
```

---

## Presentation Layer

Responsible for:

- User interaction
- Rendering information
- Sending user requests

Presentation Layer never contains business logic.

---

## Service Layer

Responsible for:

- Business rules
- Workflow
- Validation
- Integration orchestration
- Business calculations

This is the heart of the platform.

---

## Repository Layer

Responsible only for:

- reading;
- writing;
- updating;
- deleting data.

Repositories never make business decisions.

---

## Infrastructure Layer

Responsible for communication with:

- Supabase
- Nova Poshta
- Ukrposhta
- NovaPay
- Banks
- Email Providers
- Future AI Services

Infrastructure remains completely hidden from OMS.

---

###############################################################################
# 5. MVP DEVELOPMENT STRATEGY
###############################################################################

Until the first production release the project follows strict priorities.

Priority 1

Working Business Process.

Priority 2

Architecture Quality.

Priority 3

User Experience.

Priority 4

Visual Design.

---

The following improvements SHALL NOT delay MVP:

- animations;
- visual polishing;
- color improvements;
- UI redesign;
- advanced styling.

The first objective is:

> A fully automated sales system.

Only after MVP enters production may secondary improvements begin.

---

###############################################################################
# 6. ARCHITECTURAL DECISION PROCESS (ADP)
###############################################################################

Every architectural decision must follow the same sequence.

ADP-01

Identify Business Objective.

↓

ADP-02

Determine architectural responsibility.

↓

ADP-03

Design module boundaries.

↓

ADP-04

Define public interface.

↓

ADP-05

Evaluate future scalability.

↓

ADP-06

Approve architecture.

↓

ADP-07

Implement code.

↓

ADP-08

Test.

↓

ADP-09

Document.

---

No implementation begins before ADP approval.

This guarantees consistency across the entire platform.

---

###############################################################################
# 7. CONTROLLED SALES PROCESS
###############################################################################

The Controlled Sales Process defines platform evolution.

Development is organized around complete business stages.

Not around isolated technical features.

Each Sprint should complete one or several business stages.

Example:

Sprint 1

Order Creation

Sprint 2

OMS

Sprint 3

Order Status Management

Sprint 4

Delivery Engine

Sprint 5

Payment Engine

Sprint 6

Shipment Engine

Sprint 7

Tracking Engine

Business Process drives every Sprint.

---

###############################################################################
# 8. LONG-TERM VISION
###############################################################################

The PRACTICULARIUM Platform is designed as a modular ecosystem.

Current modules:

```
OMS

EMAIL DS

Delivery

Payment
```

Near Future:

```
Tracking

Warehouse

Finance

Analytics

Notification Center
```

Long-Term Vision:

```
CRM

Marketplace

Learning Platform

Knowledge Base

AI Assistant

Partner Portal

Mobile Applications
```

Every future module must comply with Architecture Standards.

---

###############################################################################
# 9. CORE ARCHITECTURAL PRINCIPLES
###############################################################################

The PRACTICULARIUM Platform evolves according to one strategic principle.

> Replace implementations.
>
> Preserve architecture.

Architecture is considered the long-term asset.

Implementations are temporary.

Architecture remains stable.

This principle guarantees:

- scalability;
- maintainability;
- adaptability;
- technology independence.

---

###############################################################################
# 10. FINAL PRINCIPLES
###############################################################################

Before writing code, every developer should answer four questions.

1.

What business problem is being solved?

2.

Which architectural layer is responsible?

3.

Can the existing architecture solve it?

4.

Will this decision simplify future development?

Only after answering these questions should implementation begin.

---

###############################################################################
# 11. CONCLUSION
###############################################################################

Architecture Standards v1.0 establishes the engineering foundation of the
PRACTICULARIUM Platform.

Every new architectural decision should strengthen these standards.

Every Sprint should improve the platform without compromising architectural
integrity.

The architecture is considered a strategic asset of the project.

###############################################################################
# APPROVAL
###############################################################################

Document ID:

AS-01

Document:

Architecture Standards v1.0

Status:

APPROVED

Project:

PRACTICULARIUM Platform

Approval Date:

July 2026

Approved By:

PRACTICULARIUM Platform Architecture Board

###############################################################################





###############################################################################
#                                                                             #
#                     PRACTICULARIUM PLATFORM                                 #
#                                                                             #
#                 Architecture Standards v1.0                                 #
#                                                                             #
#                    Официальная русская редакция                             #
###############################################################################

**Идентификатор документа:** AS-01

**Версия:** 1.0

**Статус:** УТВЕРЖДЕНО

**Классификация:** Основной архитектурный документ

**Проект:** PRACTICULARIUM Platform

**Автор:** Z.I.S.-Consulting

**Тип документа:** Архитектурный стандарт

**Дата создания:** Июль 2026

-------------------------------------------------------------------------------

# НАЗНАЧЕНИЕ ДОКУМЕНТА

Architecture Standards v1.0 определяет обязательные архитектурные принципы,
которым должны соответствовать все компоненты платформы PRACTICULARIUM.

Документ устанавливает единые правила:

- построения архитектуры;
- взаимодействия программных модулей;
- распределения ответственности;
- разработки сервисов;
- масштабирования платформы;
- долгосрочного сопровождения проекта.

Каждый новый компонент платформы обязан соответствовать данным стандартам.

-------------------------------------------------------------------------------

###############################################################################
# 1. АРХИТЕКТУРНАЯ ФИЛОСОФИЯ
###############################################################################

Платформа PRACTICULARIUM строится на одном фундаментальном принципе.

> **Сначала создаётся архитектура. Только потом начинается реализация.**

Бизнес-процессы определяют архитектуру.

Архитектура определяет модули.

Модули определяют сервисы.

Сервисы определяют реализацию.

Никогда не наоборот.

Каждое архитектурное решение должно делать систему:

- проще;
- масштабируемее;
- понятнее;
- устойчивее;
- легче в сопровождении.

Архитектурная целостность имеет более высокий приоритет,
чем скорость написания кода.

-------------------------------------------------------------------------------

###############################################################################
# 2. ОСНОВНЫЕ ПРИНЦИПЫ ПЛАТФОРМЫ
###############################################################################

Платформа строится на пяти стратегических принципах.

## Принцип 1

Business Process First.

Бизнес-процесс определяет поведение платформы.

Код реализует бизнес.

Бизнес никогда не подстраивается под код.

-------------------------------------------------------------------------------

## Принцип 2

Stable Architecture.

Архитектура должна оставаться стабильной многие годы.

Изменяться должны реализации, а не архитектура.

-------------------------------------------------------------------------------

## Принцип 3

Single Responsibility.

Каждый модуль отвечает только за одну ответственность.

Сложная система строится из простых независимых компонентов.

-------------------------------------------------------------------------------

## Принцип 4

Service-Oriented Design.

Все бизнес-операции выполняются через Service Layer.

За пределами сервисов бизнес-логика отсутствует.

-------------------------------------------------------------------------------

## Принцип 5

Replace Implementations — Never Architecture.

Тестовая реализация.

↓

Реализация через API.

↓

Оптимизированная реализация.

Все они должны использовать одинаковые публичные интерфейсы.

-------------------------------------------------------------------------------

###############################################################################
# 3. ARCHITECTURE STANDARDS
###############################################################################

# AS-01

## Repository Layer содержит только работу с данными

### Назначение

Repository обеспечивает взаимодействие исключительно с источниками данных.

Repository никогда не содержит бизнес-логики.

-------------------------------------------------------------------------------

### Ответственность Repository

Разрешается:

- создание данных;
- чтение данных;
- обновление данных;
- удаление данных.

Примеры:

- saveOrder()
- getOrders()
- getOrderByNumber()
- saveOrderStatus()

-------------------------------------------------------------------------------

### Repository НЕ ДОЛЖЕН

- проверять бизнес-процессы;
- рассчитывать стоимость доставки;
- рассчитывать оплату;
- отправлять Email;
- создавать уведомления;
- принимать бизнес-решения.

Repository ничего не решает.

Repository только выполняет операции с данными.

-------------------------------------------------------------------------------

### Архитектурная схема

```text
Presentation Layer

        ↓

Service Layer

        ↓

Repository Layer

        ↓

Database
```

-------------------------------------------------------------------------------

# AS-02

## Бизнес-логика принадлежит исключительно Service Layer

### Назначение

Все бизнес-решения принимаются только внутри сервисов.

-------------------------------------------------------------------------------

### Примеры

Правильно:

- Order Status Service
- Delivery Service
- Payment Service
- Tracking Service
- Email Service

-------------------------------------------------------------------------------

### Service отвечает за

- проверку Workflow;
- расчёт доставки;
- расчёт оплаты;
- взаимодействие с внешними API;
- генерацию уведомлений;
- создание бизнес-объектов;
- координацию Repository.

-------------------------------------------------------------------------------

### Service НЕ ДОЛЖЕН

- работать напрямую с пользовательским интерфейсом;
- содержать SQL;
- формировать HTML;
- управлять DOM браузера.

-------------------------------------------------------------------------------

### Архитектурная схема

```text
OMS

↓

Service Layer

↓

Repository

↓

Database
```

-------------------------------------------------------------------------------

# AS-03

## Каждый Service принимает один объект

### Назначение

Публичный интерфейс сервиса должен оставаться стабильным.

Развитие платформы не должно требовать изменения сигнатур сервисов.

-------------------------------------------------------------------------------

### Правильно

```javascript
calculateDelivery({

    carrier,

    city,

    quantity,

    weight,

    paymentMethod

});
```

-------------------------------------------------------------------------------

### Неправильно

```javascript
calculateDelivery(

    carrier,

    city,

    quantity,

    weight,

    paymentMethod

);
```

-------------------------------------------------------------------------------

### Преимущества

✔ неограниченная расширяемость

✔ читаемый код

✔ обратная совместимость

✔ стабильные интерфейсы

✔ упрощённое тестирование

-------------------------------------------------------------------------------

### Пример дальнейшего развития

```javascript
calculateDelivery({

    carrier,

    city,

    quantity,

    weight,

    paymentMethod,

    insurance,

    declaredValue,

    deliveryType,

    preferredDate

});
```

Интерфейс сервиса остаётся неизменным.

Меняется только содержимое объекта.

-------------------------------------------------------------------------------

# AS-04

## Запрещены "магические строки"

### Назначение

Бизнес-константы не должны дублироваться в различных частях проекта.

Все постоянные значения выносятся в специализированные Dictionary.

-------------------------------------------------------------------------------

### Правильно

```javascript
ORDER_STATUS.NEW

ORDER_STATUS.SHIPPED

CARRIERS.NOVA_POSHTA

PAYMENT_METHODS.FULL_PREPAYMENT
```

-------------------------------------------------------------------------------

### Неправильно

```javascript
"NEW"

"SHIPPED"

"Нова Пошта"

"Полная предоплата"
```

-------------------------------------------------------------------------------

### Преимущества

✔ централизованное управление

✔ защита от опечаток

✔ готовность к локализации

✔ простота сопровождения

✔ чистая архитектура

-------------------------------------------------------------------------------

### Примеры Dictionary

```text
order-status.js

carriers.js

payment-methods.js

currencies.js

languages.js

countries.js

shipment-types.js
```

Каждый Dictionary экспортирует неизменяемый объект:

```javascript
Object.freeze(...)
```

-------------------------------------------------------------------------------

###############################################################################
# AS-05
###############################################################################

## Каждый Dictionary является самостоятельным модулем

### Назначение

Все бизнес-константы должны храниться централизованно.

Каждый Dictionary представляет отдельную предметную область.

Dictionary рассматривается как самостоятельный архитектурный модуль.

-------------------------------------------------------------------------------

### Примеры

```text
order-status.js

carriers.js

payment-methods.js

currencies.js

languages.js

countries.js

shipment-types.js

notification-types.js
```

-------------------------------------------------------------------------------

### Требования к Dictionary

Каждый Dictionary:

• содержит только константы;

• не содержит бизнес-логики;

• не содержит функций;

• экспортирует неизменяемые объекты.

-------------------------------------------------------------------------------

### Правильно

```javascript
const ORDER_STATUS = Object.freeze({

    NEW: "NEW",

    CONFIRMED: "CONFIRMED",

    SHIPPED: "SHIPPED"

});
```

-------------------------------------------------------------------------------

### Неправильно

```javascript
const ORDER_STATUS = {

    NEW: "NEW"

};

ORDER_STATUS.SHIPPED = "SHIPPED";
```

-------------------------------------------------------------------------------

### Преимущества

✔ централизованная конфигурация

✔ неизменяемые бизнес-константы

✔ простота сопровождения

✔ готовность к локализации

✔ удобство интеграции с API

-------------------------------------------------------------------------------

###############################################################################
# AS-06
###############################################################################

## Каждый Service возвращает единый Result Object

### Назначение

Все сервисы взаимодействуют с платформой через единый формат ответа.

OMS никогда не должна знать внутреннюю реализацию конкретного сервиса.

-------------------------------------------------------------------------------

### Успешный результат

```javascript
{

    success: true,

    data: {

        ...

    }

}
```

-------------------------------------------------------------------------------

### Ошибка

```javascript
{

    success: false,

    error: {

        code: "...",

        message: "..."

    }

}
```

-------------------------------------------------------------------------------

### Пример использования

```javascript
const result = await calculateDelivery(...);

if (!result.success){

    ...

}

const price = result.data.delivery.price;
```

-------------------------------------------------------------------------------

### Преимущества

✔ предсказуемые API

✔ единый способ взаимодействия сервисов

✔ упрощённое тестирование

✔ удобное журналирование

✔ удобный мониторинг

✔ готовность к переходу на микросервисную архитектуру

-------------------------------------------------------------------------------

###############################################################################
# AS-07
###############################################################################

## OMS взаимодействует только с Service Layer

### Назначение

OMS отвечает исключительно за отображение информации и координацию бизнес-процессов.

OMS никогда не должна обращаться напрямую к:

• Repository;

• Database;

• Supabase;

• SQL;

• Nova Poshta API;

• Bank API;

• Tracking API.

-------------------------------------------------------------------------------

### Правильная архитектура

```text
OMS

↓

Service Layer

↓

Repository

↓

Database
```

-------------------------------------------------------------------------------

### Неправильная архитектура

```text
OMS

↓

Repository

↓

Database
```

-------------------------------------------------------------------------------

### Преимущества

✔ разделение ответственности

✔ низкая связанность компонентов

✔ упрощённое тестирование

✔ повторное использование сервисов

✔ независимость пользовательского интерфейса

-------------------------------------------------------------------------------

###############################################################################
# AS-08
###############################################################################

## Принцип единственной ответственности

### Назначение

Каждый модуль выполняет только одну бизнес-задачу.

И ничего больше.

-------------------------------------------------------------------------------

### Правильно

```text
delivery-service.js

↓

Расчёт стоимости доставки
```

-------------------------------------------------------------------------------

### Неправильно

```text
delivery-service.js

↓

Расчёт доставки

Создание ТТН

Отправка Email

Отслеживание доставки
```

-------------------------------------------------------------------------------

### Правило

Если модуль начинает решать две разные бизнес-задачи,

скорее всего, его необходимо разделить на два самостоятельных модуля.

-------------------------------------------------------------------------------

### Преимущества

✔ более простой код

✔ лёгкое тестирование

✔ простота сопровождения

✔ высокая масштабируемость

-------------------------------------------------------------------------------

###############################################################################
# AS-09
###############################################################################

## Внешние интеграции должны быть изолированы

### Назначение

Архитектура платформы не должна зависеть от конкретных внешних поставщиков услуг.

Только Service Layer знает, как работают внешние API.

OMS никогда не взаимодействует напрямую с:

• Nova Poshta;

• Ukrposhta;

• NovaPay;

• Банками;

• Платёжными шлюзами;

• Аналитическими сервисами.

-------------------------------------------------------------------------------

### Архитектурная схема

```text
OMS

↓

Delivery Service

↓

Nova Poshta API
```

или

```text
OMS

↓

Delivery Service

↓

Stub
```

или

```text
OMS

↓

Delivery Service

↓

International Carrier
```

Для OMS различий не существует.

Изменяется только внутренняя реализация сервиса.

-------------------------------------------------------------------------------

### Преимущества

✔ независимость от поставщика

✔ лёгкая замена интеграций

✔ безопасная модернизация

✔ удобство тестирования

-------------------------------------------------------------------------------

###############################################################################
# AS-10
###############################################################################

## Сначала архитектура — потом код

### Назначение

Любая новая функциональность начинается с архитектуры.

Никогда — с написания кода.

-------------------------------------------------------------------------------

### Обязательная последовательность разработки

1.

Бизнес-цель.

↓

2.

Архитектура.

↓

3.

Публичный интерфейс.

↓

4.

Проектирование модуля.

↓

5.

Реализация.

↓

6.

Тестирование.

↓

7.

Документирование.

-------------------------------------------------------------------------------

### Правило

Код пишется только после утверждения архитектурного решения.

-------------------------------------------------------------------------------

### Преимущества

✔ меньше рефакторинга

✔ более чистая архитектура

✔ более высокая скорость дальнейшей разработки

✔ минимальный технический долг

-------------------------------------------------------------------------------

###############################################################################
# 4. АРХИТЕКТУРА СЛОЕВ ПЛАТФОРМЫ
###############################################################################

Платформа PRACTICULARIUM построена на многоуровневой архитектуре.

Каждый уровень имеет строго определённую область ответственности.

```
Presentation Layer
        │
        ▼
OMS / Website / Future Mobile Applications
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
Database / External APIs
```

-------------------------------------------------------------------------------

## Presentation Layer

Отвечает за:

- взаимодействие с пользователем;
- отображение информации;
- передачу пользовательских запросов.

Presentation Layer никогда не содержит бизнес-логики.

-------------------------------------------------------------------------------

## Service Layer

Отвечает за:

- бизнес-правила;
- Workflow;
- валидацию;
- координацию интеграций;
- бизнес-вычисления.

Это центральный уровень платформы.

-------------------------------------------------------------------------------

## Repository Layer

Отвечает исключительно за:

- чтение данных;
- сохранение данных;
- обновление данных;
- удаление данных.

Repository никогда не принимает бизнес-решений.

-------------------------------------------------------------------------------

## Infrastructure Layer

Отвечает за взаимодействие с:

- Supabase;
- Nova Poshta;
- Ukrposhta;
- NovaPay;
- Банками;
- Email-провайдерами;
- будущими AI-сервисами.

Infrastructure полностью скрыта от OMS.

-------------------------------------------------------------------------------

###############################################################################
# 5. СТРАТЕГИЯ РАЗРАБОТКИ MVP
###############################################################################

До выхода первой промышленной версии проекта действуют следующие приоритеты.

Приоритет 1

Работающий бизнес-процесс.

Приоритет 2

Качество архитектуры.

Приоритет 3

Пользовательский опыт.

Приоритет 4

Визуальный дизайн.

-------------------------------------------------------------------------------

Следующие улучшения НЕ ДОЛЖНЫ задерживать выпуск MVP:

- анимации;
- визуальная полировка;
- изменение цветовой схемы;
- переработка интерфейса;
- дополнительные дизайнерские эффекты.

Главная цель проекта:

> Полностью автоматизированная система продаж.

Только после запуска MVP допускается реализация второстепенных улучшений.

-------------------------------------------------------------------------------

###############################################################################
# 6. ПРОЦЕСС ПРИНЯТИЯ АРХИТЕКТУРНЫХ РЕШЕНИЙ (ADP)
###############################################################################

Каждое архитектурное решение принимается по единой процедуре.

ADP-01

Определить бизнес-цель.

↓

ADP-02

Определить архитектурную ответственность.

↓

ADP-03

Спроектировать границы модуля.

↓

ADP-04

Определить публичный интерфейс.

↓

ADP-05

Оценить масштабируемость.

↓

ADP-06

Утвердить архитектурное решение.

↓

ADP-07

Приступить к реализации.

↓

ADP-08

Провести тестирование.

↓

ADP-09

Обновить документацию.

-------------------------------------------------------------------------------

Никакая реализация не начинается до утверждения архитектурного решения.

Это обеспечивает единообразие всей платформы.

-------------------------------------------------------------------------------

###############################################################################
# 7. CONTROLLED SALES PROCESS
###############################################################################

Controlled Sales Process определяет направление развития платформы.

Разработка организуется вокруг завершённых бизнес-этапов,

а не вокруг отдельных технических функций.

Каждый Sprint должен завершать один или несколько этапов бизнес-процесса.

-------------------------------------------------------------------------------

Пример.

Sprint 1

Создание заказа.

Sprint 2

OMS.

Sprint 3

Управление статусами заказа.

Sprint 4

Delivery Engine.

Sprint 5

Payment Engine.

Sprint 6

Shipment Engine.

Sprint 7

Tracking Engine.

-------------------------------------------------------------------------------

Бизнес-процесс определяет содержание каждого Sprint.

-------------------------------------------------------------------------------

###############################################################################
# 8. ДОЛГОСРОЧНОЕ ВИДЕНИЕ
###############################################################################

Платформа PRACTICULARIUM проектируется как модульная экосистема.

Текущие модули:

```
OMS

EMAIL DS

Delivery

Payment
```

-------------------------------------------------------------------------------

Ближайшее развитие:

```
Tracking

Warehouse

Finance

Analytics

Notification Center
```

-------------------------------------------------------------------------------

Долгосрочная перспектива:

```
CRM

Marketplace

Learning Platform

Knowledge Base

AI Assistant

Partner Portal

Mobile Applications
```

-------------------------------------------------------------------------------

Каждый будущий модуль обязан соответствовать данным Architecture Standards.

-------------------------------------------------------------------------------

###############################################################################
# 9. ОСНОВНЫЕ АРХИТЕКТУРНЫЕ ПРИНЦИПЫ
###############################################################################

Платформа PRACTICULARIUM развивается согласно одному стратегическому принципу.

> Заменяются реализации.
>
> Архитектура сохраняется.

-------------------------------------------------------------------------------

Архитектура рассматривается как долгосрочный актив проекта.

Реализации являются временными.

Архитектура должна оставаться стабильной.

-------------------------------------------------------------------------------

Данный принцип обеспечивает:

- масштабируемость;
- простоту сопровождения;
- адаптивность;
- независимость от технологий.

-------------------------------------------------------------------------------

###############################################################################
# 10. ЗАКЛЮЧИТЕЛЬНЫЕ ПРИНЦИПЫ
###############################################################################

Перед написанием кода каждый разработчик должен ответить на четыре вопроса.

1.

Какую бизнес-задачу решает данный функционал?

2.

Какой архитектурный слой должен отвечать за её реализацию?

3.

Можно ли решить задачу средствами существующей архитектуры?

4.

Сделает ли принятое решение платформу проще для дальнейшего развития?

-------------------------------------------------------------------------------

Только после получения ответов на эти вопросы начинается реализация.

-------------------------------------------------------------------------------

###############################################################################
# 11. ЗАКЛЮЧЕНИЕ
###############################################################################

Architecture Standards v1.0 определяет инженерную основу платформы
PRACTICULARIUM.

Каждое новое архитектурное решение должно укреплять данные стандарты.

Каждый новый Sprint должен развивать платформу без нарушения
архитектурной целостности.

Архитектура рассматривается как стратегический актив проекта.

###############################################################################
# УТВЕРЖДЕНИЕ
###############################################################################

Идентификатор документа:

AS-01

Документ:

Architecture Standards v1.0

Статус:

УТВЕРЖДЕНО

Проект:

PRACTICULARIUM Platform

Дата утверждения:

Июль 2026

Утверждено:

PRACTICULARIUM Platform Architecture Board

###############################################################################