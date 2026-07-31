# DELIVERY-05  
# Nova Poshta InternetDocument API  
Version 1.0  
PRACTICULARIUM Platform 2.0

---

# 1. Мета документа

Документ описує архітектуру формування об'єкта InternetDocument, який використовується для створення експрес-накладної (ТТН) через API Нової Пошти.

Документ є архітектурною специфікацією Platform 2.0 і визначає правила побудови запиту незалежно від реалізації API.

---

# 2. Призначення InternetDocument Builder

InternetDocument Builder є адаптером між внутрішньою моделлю Shipment та API Нової Пошти.

Його задача:

• не виконувати бізнес-логіку;
• не приймати рішення;
• не розраховувати параметри;
• не змінювати дані.

Builder лише перетворює вже сформований Shipment у формат, який очікує API Нової Пошти.

---

# 3. Вхідні дані

Builder отримує один параметр.

```
Shipment
```

Shipment вже містить усю необхідну інформацію.

```
Shipment

├── sender
├── recipient
├── carrier
├── service
├── package
└── options
```

---

# 4. Вихідні дані

Builder повертає об'єкт

```
InternetDocument
```

який повністю відповідає структурі API Нової Пошти.

---

# 5. Принципи роботи

InternetDocument Builder

НЕ повинен:

• перевіряти дані;
• визначати платника;
• визначати тип доставки;
• визначати тип вантажу;
• виконувати розрахунки;
• знати структуру Order.

Уся бізнес-логіка виконується раніше під час побудови Shipment.

---

# 6. Джерело даних

InternetDocument Builder використовує виключно Shipment.

```
Order
        │
        ▼
Shipment Builder
        │
        ▼
Shipment
        │
        ▼
InternetDocument Builder
        │
        ▼
Nova Poshta API
```

---

# 7. Структура InternetDocument

Версія 1.0

```
InternetDocument

├── sender
├── recipient
├── service
├── package
└── options
```

---

# 8. Відповідальність Shipment Builder

Shipment Builder повинен повністю сформувати:

Sender

Recipient

Carrier

Service

Package

Options

Після завершення побудови Shipment ніяких змін у Business Logic більше не допускається.

---

# 9. Відповідальність InternetDocument Builder

Builder виконує лише мапінг.

```
Shipment.sender
            ↓
InternetDocument.Sender

Shipment.recipient
            ↓
InternetDocument.Recipient

Shipment.service
            ↓
InternetDocument.Service

Shipment.package
            ↓
InternetDocument.Package

Shipment.options
            ↓
InternetDocument.Options
```

---

# 10. Майбутнє розширення

Після інтеграції API до InternetDocument будуть додані:

• Backward Delivery

• Declared Price

• Seats

• Payer

• Payment Method

• Cargo Parameters

• Packaging

• Additional Services

• Tracking Information

Без зміни архітектури Shipment.

---

# 11. Архітектурний принцип

Shipment є єдиною внутрішньою моделлю доставки Platform 2.0.

Будь-який перевізник (Nova Poshta, Укрпошта, DHL, Poste Italiane тощо) працює тільки через Shipment.

InternetDocument Builder є адаптером конкретного перевізника.

---

# Статус

Architecture Approved

Version 1.0