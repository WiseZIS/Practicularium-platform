# ============================================================
# PRACTICULARIUM Platform 2.0
# Fiscal Documents Standard
# Version 1.0
# ============================================================

Status:
Approved

Version:
1.0

Date:
26.07.2026

Owner:
PRACTICULARIUM Platform

Author:
Ivan Zaitsev

---------------------------------------------------------------
1. PURPOSE
---------------------------------------------------------------

Fiscal Documents Engine is responsible for creating, storing
and managing all fiscal documents generated during the operation
of PRACTICULARIUM Platform 2.0.

The objective of this standard is to establish a unified
structure for storing fiscal documents, define naming rules,
and describe the lifecycle of documents generated through
Checkbox API integration.

---------------------------------------------------------------
2. DOCUMENT TYPES
---------------------------------------------------------------

The platform supports the following document types.

• Fiscal Receipt

• Return Receipt

• Erroneous Return Act
  (Акт помилкового повернення)

• Return Act
  (Акт повернення)

• Z Reports

• Fiscal Archive

---------------------------------------------------------------
3. DIRECTORY STRUCTURE
---------------------------------------------------------------

documents/

└── fiscal/

    ├── templates/

    ├── 2026/

    ├── 2027/

    ├── archive/

Templates contain only blank document forms.

Year folders contain actual business documents.

Archive stores completed historical periods.

---------------------------------------------------------------
4. TEMPLATES
---------------------------------------------------------------

Template files are permanent.

Templates are never edited during daily work.

Current template list:

Act_Pomylkovoho_Povernennia.docx

Act_Povernennia.docx

Future templates may include:

ReceiptCover.docx

FiscalReport.docx

---------------------------------------------------------------
5. DOCUMENT NUMBERING
---------------------------------------------------------------

Each fiscal document receives its own number.

Recommended format:

YYYY-NNNNNN

Examples:

2026-000001

2026-000002

2027-000001

This numbering is independent from Order Numbers.

---------------------------------------------------------------
6. OPERATION DIRECTORY
---------------------------------------------------------------

Each fiscal operation has its own directory.

Example:

documents/

└── fiscal/

    └── 2026/

        └── 2026-000001/

            Receipt.json

            Receipt.pdf

            ReturnReceipt.json

            ReturnReceipt.pdf

            Act_Pomylkovoho_Povernennia.docx

            Metadata.json

Keeping all files together allows complete reconstruction
of any fiscal operation.

---------------------------------------------------------------
7. STORED DATA
---------------------------------------------------------------

Every operation should preserve:

Receipt UUID

Return Receipt UUID

Fiscal Code

Fiscal Date

Transaction ID

Tax URL

Order Number

OMS Status

Customer Information

Payment Method

---------------------------------------------------------------
8. AUTOMATIC DOCUMENT GENERATION
---------------------------------------------------------------

Future versions of PRACTICULARIUM Platform will automatically
generate fiscal documents.

Workflow:

OMS

↓

Checkbox API

↓

Receipt

↓

Receipt PDF

↓

Return Receipt

↓

Return PDF

↓

Erroneous Return Act

↓

Archive

No manual document creation should be required.

---------------------------------------------------------------
9. STORAGE RULES
---------------------------------------------------------------

Fiscal documents are never deleted.

Documents may only be archived.

Templates may only be modified through
a new approved version of this standard.

All fiscal documents are stored locally.

---------------------------------------------------------------
10. CHECKBOX REQUIREMENTS
---------------------------------------------------------------

According to official Checkbox support:

• Fiscal receipts cannot be deleted.

• Erroneous receipts require a fiscal return.

• If the receipt amount is 100 UAH or more,
  an Erroneous Return Act must be created.

• The Act is NOT sent to Checkbox.

• The Act is NOT sent to the Tax Service.

• The Act must be stored locally and presented
  only if requested during a tax inspection.

---------------------------------------------------------------
11. FUTURE DEVELOPMENT
---------------------------------------------------------------

Fiscal Documents Engine v1.1

Automatic PDF generation

Automatic Act generation

Automatic numbering

Automatic archive creation

Automatic export

Automatic backup

---------------------------------------------------------------
12. APPROVAL
---------------------------------------------------------------

Status:

APPROVED

Version:

1.0

Project:

PRACTICULARIUM Platform 2.0

============================================================
END OF DOCUMENT
============================================================




# ============================================================
# PRACTICULARIUM Platform 2.0
# Стандарт фіскальних документів
# Версія 1.0
# ============================================================

Статус:
ЗАТВЕРДЖЕНО

Версія:
1.0

Дата:
26.07.2026

Проєкт:
PRACTICULARIUM Platform 2.0

Автор:
Іван Зайцев

---------------------------------------------------------------
1. ПРИЗНАЧЕННЯ
---------------------------------------------------------------

Fiscal Documents Engine призначений для створення,
зберігання та супроводу всіх документів, пов'язаних
із фіскалізацією операцій PRACTICULARIUM Platform 2.0.

Метою цього стандарту є встановлення єдиної структури
зберігання документів, правил їх нумерації та опису
життєвого циклу документів, сформованих через інтеграцію
з Checkbox API.

---------------------------------------------------------------
2. ВИДИ ДОКУМЕНТІВ
---------------------------------------------------------------

Платформа підтримує такі види документів.

• Фіскальний чек

• Чек повернення

• Акт помилкового повернення

• Акт повернення

• Z-звіти

• Архів фіскальних документів

---------------------------------------------------------------
3. СТРУКТУРА КАТАЛОГІВ
---------------------------------------------------------------

documents/

└── fiscal/

    ├── templates/

    ├── 2026/

    ├── 2027/

    ├── archive/

Каталог templates містить лише шаблони документів.

Каталоги за роками містять реальні документи.

Каталог archive використовується для архівного зберігання.

---------------------------------------------------------------
4. ШАБЛОНИ
---------------------------------------------------------------

Шаблони є еталонними документами.

Під час повсякденної роботи вони не змінюються.

Поточний перелік шаблонів:

Act_Pomylkovoho_Povernennia.docx

Act_Povernennia.docx

У майбутньому можуть бути додані:

ReceiptCover.docx

FiscalReport.docx

---------------------------------------------------------------
5. НУМЕРАЦІЯ ДОКУМЕНТІВ
---------------------------------------------------------------

Кожний фіскальний документ отримує власний номер.

Рекомендований формат:

YYYY-NNNNNN

Приклади:

2026-000001

2026-000002

2027-000001

Нумерація не залежить від номера замовлення OMS.

---------------------------------------------------------------
6. КАТАЛОГ ОПЕРАЦІЇ
---------------------------------------------------------------

Для кожної фіскальної операції створюється окремий каталог.

Приклад:

documents/

└── fiscal/

    └── 2026/

        └── 2026-000001/

            Receipt.json

            Receipt.pdf

            ReturnReceipt.json

            ReturnReceipt.pdf

            Act_Pomylkovoho_Povernennia.docx

            Metadata.json

Усі документи однієї операції зберігаються разом.

---------------------------------------------------------------
7. ДАНІ, ЩО ЗБЕРІГАЮТЬСЯ
---------------------------------------------------------------

Для кожної операції необхідно зберігати:

UUID чека

UUID чека повернення

Фіскальний код

Дату фіскалізації

Transaction ID

Tax URL

Номер замовлення

Статус OMS

Дані покупця

Спосіб оплати

---------------------------------------------------------------
8. АВТОМАТИЧНЕ ФОРМУВАННЯ ДОКУМЕНТІВ
---------------------------------------------------------------

У наступних версіях PRACTICULARIUM Platform
формування документів буде автоматизоване.

Схема роботи:

OMS

↓

Checkbox API

↓

Фіскальний чек

↓

PDF чека

↓

Чек повернення

↓

PDF повернення

↓

Акт помилкового повернення

↓

Архів

Ручне створення документів має бути винятком.

---------------------------------------------------------------
9. ПРАВИЛА ЗБЕРІГАННЯ
---------------------------------------------------------------

Фіскальні документи не видаляються.

Документи можуть лише архівуватися.

Шаблони можуть змінюватися лише після
затвердження нової версії цього стандарту.

Усі документи зберігаються локально
у структурі проєкту PRACTICULARIUM.

---------------------------------------------------------------
10. ВИМОГИ CHECKBOX
---------------------------------------------------------------

Відповідно до офіційних роз'яснень служби підтримки Checkbox:

• Фіскальний чек неможливо анулювати або видалити.

• Помилковий чек виправляється лише шляхом
  створення фіскального чека повернення.

• Якщо сума чека становить 100 грн або більше,
  обов'язково складається Акт помилкового повернення.

• Акт не надсилається до Checkbox.

• Акт не надсилається до ДПС.

• Акт зберігається локально та надається
  лише у разі перевірки ДПС.

---------------------------------------------------------------
11. ПОДАЛЬШИЙ РОЗВИТОК
---------------------------------------------------------------

Fiscal Documents Engine v1.1

Автоматичне формування PDF

Автоматичне створення актів

Автоматична нумерація

Автоматичне створення архіву

Автоматичне резервне копіювання

---------------------------------------------------------------
12. ЗАТВЕРДЖЕННЯ
---------------------------------------------------------------

Статус:

ЗАТВЕРДЖЕНО

Версія:

1.0

Проєкт:

PRACTICULARIUM Platform 2.0

============================================================
КІНЕЦЬ ДОКУМЕНТА
============================================================