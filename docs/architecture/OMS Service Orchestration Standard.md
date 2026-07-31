# ============================================================
# PRACTICULARIUM Platform 2.0
# Architecture Standard AS-05
# OMS Service Orchestration Standard
# Version 1.0
# Status: APPROVED
# Language: Ukrainian
# ============================================================

# 1. Мета

Цей стандарт визначає взаємодію між OMS та внутрішніми і зовнішніми сервісами платформи.

Основною метою є централізація всієї бізнес-логіки всередині OMS та повне розділення відповідальності між модулями системи.

---

# 2. Основний принцип

OMS є єдиним координатором бізнес-процесів.

Жоден зовнішній Provider не має права напряму взаємодіяти з іншими сервісами платформи.

Всі виклики проходять виключно через OMS.

---

# 3. Архітектура

Customer

↓

OMS

↓

Fiscal Engine

↓

Checkbox Provider

↓

Checkbox API

↓

Receipt DONE

↓

Receipt PDF

↓

Storage Engine

↓

Receipt.pdf

↓

OMS

↓

Notification Service

↓

Customer

---

# 4. Відповідальність модулів

## OMS

Відповідає за:

- координацію бізнес-процесів;
- управління статусами замовлення;
- виклик внутрішніх сервісів;
- виклик зовнішніх Provider;
- прийняття бізнес-рішень.

OMS є центральною точкою взаємодії всієї платформи.

---

## Checkbox Provider

Відповідає виключно за:

- авторизацію;
- відкриття та перевірку зміни;
- створення фіскальних чеків;
- повернення чеків;
- перевірку статусу;
- отримання PDF;
- отримання службової інформації.

Checkbox Provider не має права:

- надсилати Email;
- надсилати SMS;
- працювати зі Storage;
- змінювати OMS;
- взаємодіяти з іншими Provider.

---

## Storage Engine

Відповідає виключно за збереження документів.

Приклади:

- Receipt.pdf
- ReturnReceipt.pdf
- TTN.pdf
- Invoice.pdf
- Email Templates
- Metadata

Storage Engine не містить бізнес-логіки.

---

## Notification Service

Відповідає виключно за доставку повідомлень клієнту.

Notification Service працює тільки з документами, які вже збережені у Storage Engine.

Notification Service не звертається до зовнішніх Provider.

---

# 5. Single Responsibility Principle

Кожен модуль відповідає лише за власну область відповідальності.

Checkbox Provider

↓

Створення фіскальних документів

Storage Engine

↓

Збереження документів

OMS

↓

Координація бізнес-процесів

Notification Service

↓

Доставка повідомлень

---

# 6. Заборонені взаємодії

Не допускаються наступні зв'язки:

✗ Checkbox → Email

✗ Checkbox → Notification

✗ Checkbox → Database

✗ Checkbox → Storage

✗ Nova Poshta → Notification

✗ Nova Poshta → Database

✗ Nova Poshta → Storage

Всі взаємодії виконуються лише через OMS.

---

# 7. Переваги архітектури

Даний підхід забезпечує:

- слабке зв'язування модулів;
- просту підтримку;
- легку заміну Provider;
- масштабованість;
- повторне використання документів;
- незалежність Notification Service;
- відповідність принципам SOLID.

---

# 8. Статус

Architecture Standard AS-05

OMS Service Orchestration Standard

Status:

APPROVED




# ============================================================
# PRACTICULARIUM Platform 2.0
# Architecture Standard AS-05
# OMS Service Orchestration Standard
# Version 1.0
# Status: APPROVED
# Language: English
# ============================================================

# 1. Purpose

This standard defines the interaction between OMS and all internal and external platform services.

The primary goal is to centralize business logic within OMS while maintaining strict separation of responsibilities between system modules.

---

# 2. Core Principle

OMS is the single business process orchestrator.

No external Provider may communicate directly with any other platform service.

All interactions must pass exclusively through OMS.

---

# 3. Architecture

Customer

↓

OMS

↓

Fiscal Engine

↓

Checkbox Provider

↓

Checkbox API

↓

Receipt DONE

↓

Receipt PDF

↓

Storage Engine

↓

Receipt.pdf

↓

OMS

↓

Notification Service

↓

Customer

---

# 4. Module Responsibilities

## OMS

Responsible for:

- business process orchestration;
- order lifecycle management;
- service coordination;
- external Provider coordination;
- business decision making.

OMS is the central controller of the platform.

---

## Checkbox Provider

Responsible only for:

- authentication;
- shift management;
- fiscal receipt creation;
- receipt returns;
- receipt status;
- PDF retrieval;
- service information retrieval.

Checkbox Provider must never:

- send emails;
- send notifications;
- access Storage Engine;
- modify OMS;
- communicate with other Providers.

---

## Storage Engine

Responsible exclusively for document storage.

Examples:

- Receipt.pdf
- ReturnReceipt.pdf
- TTN.pdf
- Invoice.pdf
- Email Templates
- Metadata

Storage Engine contains no business logic.

---

## Notification Service

Responsible exclusively for customer communication.

Notification Service works only with documents already stored in Storage Engine.

It never communicates directly with external Providers.

---

# 5. Single Responsibility Principle

Each module has one responsibility only.

Checkbox Provider

↓

Fiscal operations

Storage Engine

↓

Document storage

OMS

↓

Business orchestration

Notification Service

↓

Customer communication

---

# 6. Forbidden Interactions

The following interactions are prohibited:

✗ Checkbox → Email

✗ Checkbox → Notification

✗ Checkbox → Database

✗ Checkbox → Storage

✗ Nova Poshta → Notification

✗ Nova Poshta → Database

✗ Nova Poshta → Storage

All communication must pass through OMS.

---

# 7. Architecture Benefits

This architecture provides:

- loose coupling;
- maintainability;
- Provider independence;
- scalability;
- document reusability;
- independent Notification Service;
- SOLID compliance.

---

# 8. Status

Architecture Standard AS-05

OMS Service Orchestration Standard

Status:

APPROVED