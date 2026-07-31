# PRACTICULARIUM Platform 2.0

# Shipment Architecture

**Version:** 1.0

**Status:** APPROVED

**Date:** 18.07.2026

---

# Purpose

Shipment — це самостійна логістична сутність платформи PRACTICULARIUM Platform 2.0.

Його основне призначення — описати повний життєвий цикл фізичного відправлення замовлення незалежно від конкретного перевізника.

Shipment не містить бізнес-логіки продажу та не відповідає за оплату чи вартість товарів.

Його відповідальність — виключно організація доставки.

---

# Architecture

```
                 Order
                   │
                   ▼
          Shipment Builder
                   │
                   ▼
               Shipment
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Nova Poshta Provider   Ukrposhta Provider
        ▼                     ▼
 Nova Poshta API       Ukrposhta API
```

---

# Responsibility

Shipment відповідає лише на одне питання:

> **Як саме необхідно фізично доставити конкретне замовлення.**

Shipment не знає:

- хто купив товар;
- скільки коштує товар;
- яким способом оплачено замовлення;
- як формується бізнес-процес продажу.

Shipment знає лише інформацію, необхідну для логістики.

---

# Shipment Structure

```
Shipment

├── sender
│
├── recipient
│
├── carrier
│
├── package
│
├── options
│
├── calculation
│
└── tracking
```

---

# Components

## sender

Інформація про відправника.

Наприклад:

- країна;
- місто;
- City Ref;
- відділення;
- Warehouse Ref;
- контактна особа.

---

## recipient

Інформація про отримувача.

Наприклад:

- країна;
- місто;
- City Ref;
- відділення;
- Warehouse Ref;
- адреса;
- телефон.

---

## carrier

Перевізник.

Наприклад:

- Nova Poshta
- Ukrposhta
- Poste Italiane
- DHL
- інші служби доставки

---

## package

Фізичні характеристики відправлення.

Наприклад:

- вага;
- довжина;
- ширина;
- висота;
- об'ємна вага;
- тип упаковки.

---

## options

Додаткові параметри доставки.

Наприклад:

- післяплата;
- оголошена вартість;
- пакування;
- SMS-повідомлення;
- кур'єрська доставка;
- інші додаткові послуги.

---

## calculation

Результат автоматичного розрахунку доставки.

Може містити:

- тариф перевізника;
- вартість пакування;
- додаткові послуги;
- повну вартість доставки.

---

## tracking

Інформація після реєстрації відправлення.

Наприклад:

- номер ТТН;
- дата створення;
- поточний статус;
- дата вручення;
- історія зміни статусів.

---

# Shipment Lifecycle

Пропонується використовувати окремий життєвий цикл Shipment.

```
CREATED

CALCULATED

REGISTERED

READY_TO_SHIP

IN_TRANSIT

READY_FOR_PICKUP

DELIVERED

RETURNED

CANCELLED
```

Shipment має власний життєвий цикл незалежно від життєвого циклу замовлення.

---

# Relationship with Order

У Platform існують дві незалежні системи статусів.

## Order Status

```
NEW

CONFIRMED

PAID

SHIPPED

COMPLETED
```

---

## Shipment Status

```
CREATED

REGISTERED

IN_TRANSIT

READY_FOR_PICKUP

DELIVERED
```

Вони можуть змінюватися незалежно одна від одної.

Наприклад:

```
Order

PAID
```

при цьому

```
Shipment

CREATED
```

або

```
Order

SHIPPED
```

а

```
Shipment

DELIVERED
```

---

# Architectural Principle

Shipment є універсальною логістичною моделлю.

Будь-який Delivery Provider повинен працювати виключно через Shipment.

```
Shipment
        │
        ├── Nova Poshta Provider
        ├── Ukrposhta Provider
        ├── Poste Italiane Provider
        └── DHL Provider
```

Завдяки цьому додавання нового перевізника не потребує зміни бізнес-логіки платформи.

---

# Independence Principle

Shipment не залежить від джерела створення замовлення.

Для Shipment не має значення, чи було замовлення:

- оформлено через сайт;
- створено менеджером в OMS;
- імпортовано з маркетплейсу;
- отримано через мобільний застосунок.

Shipment працює лише з готовими даними логістики.

---

# Architecture Decision

**Approved**

Цей документ визначає базову архітектуру Shipment для всіх логістичних модулів PRACTICULARIUM Platform 2.0.

Усі майбутні інтеграції служб доставки повинні відповідати цій моделі.