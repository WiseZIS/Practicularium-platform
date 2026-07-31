# ============================================================
# PRACTICULARIUM Platform 2.0
# Internal Fiscal Request Specification
# Version 1.0
# ============================================================

## Purpose

This document defines the Internal Fiscal Request used by
PRACTICULARIUM Platform.

The Internal Fiscal Request is the only contract between
OMS/Fiscal Engine and Fiscal Providers.

Fiscal Providers must never receive OMS objects directly.

------------------------------------------------------------

## Architecture

OMS

        │

        ▼

Fiscal Builder

        │

        ▼

Internal Fiscal Request

        │

        ▼

Fiscal Provider

        │

        ▼

Provider Mapper

        │

        ▼

External Fiscal API

------------------------------------------------------------

## Object Structure

Internal Fiscal Request

{

    customer,

    goods,

    payments

}

------------------------------------------------------------

## Customer

Customer contains purchaser information.

{

    name,

    email,

    phone

}

------------------------------------------------------------

## Goods

Goods is an array of fiscal items.

Each item contains

{

    code,

    name,

    quantity,

    price,

    tax

}

------------------------------------------------------------

## Payments

Payments is an array describing
how the purchase is paid.

Each payment contains

{

    type,

    value

}

------------------------------------------------------------

## Design Principles

Internal Fiscal Request

• is Provider-independent;

• contains only business data;

• contains no Provider-specific fields;

• contains no HTTP information;

• contains no authentication data.

------------------------------------------------------------

## Provider Responsibilities

Fiscal Provider

• receives Internal Fiscal Request;

• converts it to Provider format;

• sends Provider Request;

• returns unified Fiscal Result.

OMS never depends on Provider structure.

------------------------------------------------------------

End of document.




# ============================================================
# PRACTICULARIUM Platform 2.0
# Специфікація Internal Fiscal Request
# Версія 1.0
# ============================================================

## Призначення

Цей документ визначає структуру Internal Fiscal Request,
який використовується у PRACTICULARIUM Platform.

Internal Fiscal Request є єдиним контрактом між
OMS/Fiscal Engine та Fiscal Provider.

Fiscal Provider ніколи не повинен отримувати
внутрішні об'єкти OMS безпосередньо.

------------------------------------------------------------

## Архітектура

OMS

        │

        ▼

Fiscal Builder

        │

        ▼

Internal Fiscal Request

        │

        ▼

Fiscal Provider

        │

        ▼

Provider Mapper

        │

        ▼

Зовнішній Fiscal API

------------------------------------------------------------

## Структура об'єкта

Internal Fiscal Request

{

    customer,

    goods,

    payments

}

------------------------------------------------------------

## Customer

Customer містить інформацію про покупця.

{

    name,

    email,

    phone

}

------------------------------------------------------------

## Goods

Goods — це масив товарних позицій.

Кожна позиція містить

{

    code,

    name,

    quantity,

    price,

    tax

}

------------------------------------------------------------

## Payments

Payments — це масив способів оплати.

Кожен платіж містить

{

    type,

    value

}

------------------------------------------------------------

## Принципи проєктування

Internal Fiscal Request

• не залежить від Fiscal Provider;

• містить лише бізнес-дані;

• не містить Provider-специфічних полів;

• не містить HTTP-інформації;

• не містить даних автентифікації.

------------------------------------------------------------

## Зони відповідальності

Fiscal Provider

• отримує Internal Fiscal Request;

• перетворює його у формат Provider;

• формує Provider Request;

• надсилає запит до зовнішнього API;

• повертає уніфікований Fiscal Result.

OMS ніколи не повинен залежати
від структури конкретного Fiscal Provider.

------------------------------------------------------------

Кінець документа.