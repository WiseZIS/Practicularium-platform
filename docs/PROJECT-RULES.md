# PRACTICULARIUM Platform

# PROJECT-RULES

**Version:** 1.0

**Status:** APPROVED

**Last Update:** 2026-07-01

---

# Purpose

This document defines the official development principles, standards and working rules of the PRACTICULARIUM Platform.

Every architectural, technical and business decision must comply with these rules.

PROJECT-RULES is the highest-level development standard of the project.

---

# Project Goal

Build a fully controlled PRACTICULARIUM Platform capable of managing the complete customer transaction lifecycle — from customer order creation to successful payment confirmation on the FOP account.

Every project decision must support this objective.

---

# Development Rules

---

## Rule 1

### Project Goal

Every decision must contribute to launching a fully controlled sales platform.

---

## Rule 2

### MVP First

The first priority is to build a complete working system.

Improvements, optimizations and additional functionality are implemented only after the working version has been completed and tested.

---

## Rule 3

### Architecture First

Every new subsystem follows the same sequence.

```text
Architecture

↓

Approval

↓

Implementation

↓

Testing

↓

Release
```

Coding never starts before architecture approval.

---

## Rule 4

### Simplicity First

Whenever two solutions provide the same result, the simpler solution is preferred.

Complexity is introduced only when it provides measurable value.

---

## Rule 5

### Working Code First

Stable and working code is never rewritten only for aesthetic reasons.

Refactoring is performed only when it improves stability, maintainability or future scalability.

---

## Rule 6

### One Step at a Time

During debugging or implementation only one significant change is introduced at a time.

This allows problems to be identified quickly and reliably.

---

## Rule 7

### Small Finished Milestones

Large objectives are divided into small completed stages.

Every stage must produce a real, usable and testable result.

---

## Rule 8

### Documentation Has Value

Documentation is created only when it improves development, maintenance or future scalability.

Documents are never created for their own sake.

---

## Rule 9

### Minimal Documentation

The project maintains only the minimum number of documents necessary for successful development.

Every document must have a clearly defined purpose.

---

## Rule 10

### One Document — One Responsibility

Each document describes only one subject.

- PROJECT-RULES contains only project rules.
- ROADMAP contains only planning.
- Architecture documents contain only architecture.
- Technical specifications contain only technical specifications.

---

## Rule 11

### Single Source of Truth

For customer orders the database is the only source of truth.

Website forms create orders.

Emails notify users.

Supabase stores the official order record.

---

## Rule 12

### Orders Never Disappear

Orders are never deleted.

Orders only change their status.

This guarantees complete business history and traceability.

---

## Rule 13

### Stable Architecture

Architectural decisions should support future platform growth without requiring complete redesign.

Long-term maintainability is preferred over short-term convenience.

---

## Rule 14

### Sales Before Improvements

Before implementing any new feature, one question must always be answered.

> Will this help launch the controlled sales platform sooner?

If the answer is **No**, the task is moved to the ROADMAP.

---

## Rule 15

### Platform Thinking

PRACTICULARIUM is developed as a software platform rather than a simple website.

Every decision should support future expansion while remaining practical for the current stage.

---

## Rule 16

### Documentation Is a Living Part of the Project

Documentation has the same importance as source code.

Whenever an approved architectural, technical or business decision changes, the corresponding project document must be updated immediately.

Project documentation must always reflect the current state of the platform.

Documentation is never postponed for future updates.

---

## Rule 17

### Continuous Improvement

The project evolves through controlled iterations.

Stable versions are improved instead of rebuilding the system from scratch.

---

## Rule 18

### Approved Decisions Are Stable Until Improved

Once an architectural or business decision has been approved, it becomes the current project standard.

Previously approved decisions are not reconsidered without objective technical or business reasons.

If a better solution is proposed, it follows the same sequence.

```text
Analysis

↓

Discussion

↓

Approval

↓

Immediate Documentation Update

↓

Implementation
```

Approved improvements become part of the project immediately.

No approved changes remain outside the official documentation.

---

## Rule 19

### Document Versioning

Every official project document must contain:

- Version
- Status
- Last Update
- Change History

All official project documents follow a unified documentation standard.

---

# Core Development Principle

The team does not build isolated pages or separate features.

The team builds one complete software platform.

Every completed stage becomes a stable foundation for the next stage.

---

## Rule 20. Module Acceptance

## Module Acceptance

Before a new module can be integrated into the platform, it must successfully pass the following stages:

1. Architecture & Code Review
2. Unit Testing
3. Integration Testing

Only after successfully completing all three stages is a module considered ready for integration into the PRACTICULARIUM Platform.

---


# Change History

| Version | Date | Description |
|----------|------------|----------------------------------------------|
| 1.0 | 2026-07-01 | Initial approved version |

---

**Approved for the PRACTICULARIUM Platform.**










# Платформа PRACTICULARIUM

# PROJECT-RULES

**Версия:** 1.0

**Статус:** APPROVED

**Последнее обновление:** 2026-07-01

---

# Назначение

Настоящий документ определяет официальные принципы разработки, стандарты и правила работы над платформой PRACTICULARIUM.

Все архитектурные, технические и бизнес-решения должны соответствовать данным правилам.

PROJECT-RULES является документом высшего уровня, определяющим стандарты разработки проекта.

---

# Цель проекта

Создать полностью контролируемую платформу PRACTICULARIUM, способную управлять полным жизненным циклом сделки с клиентом — от оформления заказа до подтверждения поступления денежных средств на счет ФОП.

Каждое решение, принимаемое в рамках проекта, должно способствовать достижению этой цели.

---

# Правила разработки

---

## Правило 1

### Цель проекта

Каждое принимаемое решение должно способствовать запуску полностью контролируемой платформы продаж.

---

## Правило 2

### Сначала MVP

Первостепенной задачей является создание полностью работоспособной системы.

Улучшения, оптимизация и дополнительная функциональность реализуются только после завершения и тестирования первой рабочей версии.

---

## Правило 3

### Сначала архитектура

Каждая новая подсистема разрабатывается по единой последовательности.

```text
Архитектура

↓

Утверждение

↓

Реализация

↓

Тестирование

↓

Релиз
```

Разработка программного кода никогда не начинается до утверждения архитектуры.

---

## Правило 4

### Простота прежде всего

Если две реализации приводят к одинаковому результату, предпочтение всегда отдается более простому решению.

Усложнение допускается только тогда, когда оно приносит измеримую практическую пользу.

---

## Правило 5

### Сначала работающий код

Стабильный и корректно работающий код не переписывается исключительно по эстетическим причинам.

Рефакторинг выполняется только в том случае, если он повышает стабильность, сопровождаемость или масштабируемость системы.

---

## Правило 6

### Один шаг за один раз

Во время разработки или поиска ошибок одновременно вносится только одно существенное изменение.

Это позволяет быстрее и надежнее определить причину возникающих проблем.

---

## Правило 7

### Небольшие завершенные этапы

Крупные задачи разбиваются на небольшие завершенные этапы.

Каждый этап должен давать реальный, законченный и проверяемый результат.

---

## Правило 8

### Документация должна приносить пользу

Документация создается только тогда, когда она действительно помогает разработке, сопровождению или дальнейшему развитию проекта.

Документы никогда не создаются ради самих документов.

---

## Правило 9

### Минимально необходимая документация

Проект поддерживает только тот набор документов, который действительно необходим для успешной разработки.

Каждый документ обязан иметь четко определенное назначение.

---

## Правило 10

### Один документ — одна ответственность

Каждый документ описывает только одну предметную область.

- PROJECT-RULES содержит только правила проекта.
- ROADMAP содержит только план развития проекта.
- Архитектурные документы описывают только архитектуру.
- Технические спецификации описывают только техническую реализацию.

---

## Правило 11

### Единый источник достоверной информации

Для всех заказов клиентов единственным достоверным источником информации является база данных.

Формы сайта создают заказ.

Электронные письма уведомляют пользователей.

Supabase хранит официальный экземпляр заказа.

---

## Правило 12

### Заказы никогда не удаляются

Заказы никогда не удаляются.

Заказ может изменять только свое состояние (статус).

Это обеспечивает полную историю операций и возможность проследить весь жизненный цикл заказа.

---

## Правило 13

### Стабильная архитектура

Архитектурные решения должны обеспечивать дальнейшее развитие платформы без необходимости полного перепроектирования.

Долгосрочная сопровождаемость всегда имеет приоритет над краткосрочным удобством.

---

## Правило 14

### Продажи важнее улучшений

Перед реализацией любой новой функциональности всегда необходимо ответить на один вопрос.

> Поможет ли это быстрее запустить полностью контролируемую платформу продаж?

Если ответ **«Нет»**, задача переносится в ROADMAP.

---

## Правило 15

### Платформенное мышление

PRACTICULARIUM создается как программная платформа, а не как обычный веб-сайт.

Каждое решение должно одновременно поддерживать дальнейшее развитие платформы и соответствовать текущему этапу проекта.

---

## Правило 16

### Документация — живая часть проекта

Документация имеет такую же важность, как и исходный программный код.

После утверждения любого архитектурного, технического или бизнес-решения соответствующий документ проекта должен быть обновлен незамедлительно.

Документация всегда должна отражать текущее состояние платформы.

Обновление документации никогда не откладывается на будущее.

---

## Правило 17

### Непрерывное развитие

Проект развивается посредством последовательных и контролируемых итераций.

Каждая стабильная версия совершенствуется постепенно без полного переписывания системы с нуля.

---

## Правило 18

### Утвержденные решения действуют до их официального изменения

После утверждения архитектурное или бизнес-решение становится действующим стандартом проекта.

Ранее утвержденные решения не пересматриваются без объективных технических или бизнес-оснований.

Если предлагается более удачное решение, оно проходит тот же процесс согласования.

```text
Анализ

↓

Обсуждение

↓

Утверждение

↓

Немедленное обновление документации

↓

Реализация
```

Все утвержденные изменения сразу становятся частью проекта.

Ни одно утвержденное решение не должно существовать вне официальной документации.

---

## Правило 19

### Версионирование документов

Каждый официальный документ проекта должен содержать:

- Версию;
- Статус;
- Дату последнего обновления;
- Историю изменений.

Все официальные документы проекта оформляются по единому стандарту.

---

# Основной принцип разработки

Команда создает не отдельные страницы и не разрозненные функции.

Команда создает единую программную платформу.

Каждый завершенный этап становится надежной основой для следующего этапа развития проекта.

---

## Rule 20. Приемка модулей

## Приемка модулей

Перед интеграцией нового модуля в платформу он должен успешно пройти следующие этапы:

1. Проверка архитектуры и кода (Architecture & Code Review)
2. Модульное тестирование (Unit Testing)
3. Интеграционное тестирование (Integration Testing)

Только после успешного прохождения всех трех этапов модуль считается готовым к интеграции в PRACTICULARIUM Platform.

---

# История изменений

| Версия | Дата | Описание |
|---------|------------|----------------------------------------------|
| 1.0 | 2026-07-01 | Первая утвержденная редакция |

---

**Утверждено для платформы PRACTICULARIUM.**