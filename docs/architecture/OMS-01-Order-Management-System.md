# PRACTICULARIUM Platform

# OMS-01

# Order Management System



                                                                ## Architecture Specification

**Version:** 1.0

**Status:** APPROVED

**Last Update:** 2026-07-01

---

# Purpose

This document defines the architecture of the Order Management System (OMS) used by the PRACTICULARIUM Platform.

OMS is responsible for managing the complete lifecycle of every customer transaction.

Its purpose is to provide a fully controlled business process beginning with the customer's first order and ending with successful transaction completion, post-sale communication and analytical processing.

OMS serves as the operational core of the PRACTICULARIUM Platform and provides complete visibility, control and traceability of every transaction.

---

# Scope

OMS covers all business processes related to customer transactions within the PRACTICULARIUM Platform.

These include:

- Customer order registration
- Order validation
- Transaction management
- Payment control
- Book preparation
- Packaging
- Shipment
- Delivery confirmation
- Payment confirmation
- Transaction completion
- Customer communication
- Post-sale interaction
- Customer feedback
- Business analytics
- Future customer relationship management

---

# Vision

OMS is designed to become the operational heart of the PRACTICULARIUM Platform.

Its long-term vision is to provide complete control over every customer transaction while creating a seamless, transparent and scalable business process.

OMS shall evolve together with the platform and remain the central operational system supporting readers, products, communications and business analytics.

---

# Architecture Philosophy

The PRACTICULARIUM Platform is not designed as an online bookstore.

The platform is designed as a complete customer relationship ecosystem.

Orders are only one part of a much larger customer lifecycle.

The primary objective of the platform is to build long-term relationships between the author and the reader.

Every subsystem of PRACTICULARIUM exists to support this objective.

---

# Core Principles

---

## Principle 1

### Reader First

The central object of the platform is the Reader.

Orders, payments, deliveries and communications exist only as parts of the reader lifecycle.

---

## Principle 2

### Transaction Management

OMS manages complete business transactions rather than isolated customer orders.

A transaction begins with the customer's first interaction and ends only after the business process has been successfully completed.

---

## Principle 3

### Complete Lifecycle

Every customer transaction passes through a controlled lifecycle.

No stage exists outside the system.

Every important business event must be recorded.

---

## Principle 4

### Full Traceability

Every transaction must be fully traceable.

The platform must always answer the following questions:

- What happened?
- When did it happen?
- Who performed the action?
- What is the current status?
- What should happen next?

---

## Principle 5

### Automation First

Whenever possible, repetitive business processes should be automated.

Automation reduces manual work while maintaining full business control.

---

## Principle 6

### Human Control

Automation never replaces business responsibility.

Critical business decisions always remain under administrator control.

---

## Principle 7

### Controlled Growth

The Order Management System (OMS) shall support future expansion of the PRACTICULARIUM Platform without requiring architectural redesign.

New products, services and communication channels shall integrate into the existing OMS architecture.

Platform evolution follows a controlled implementation model.

Each development level must be fully completed, tested and approved before the next level of functionality is introduced.

New functionality is implemented only when it provides clear business value, supports the current project mission and does not require disproportionate redesign or destabilization of the existing system.

---

# Business Objective

The objective of OMS is not simply to process customer orders.

Its objective is to manage the complete customer transaction lifecycle while building long-term relationships between the reader and the PRACTICULARIUM Platform.

Every completed transaction should:

- Increase customer trust
- Improve customer satisfaction
- Generate valuable business analytics
- Create opportunities for future interaction
- Support sustainable growth of the PRACTICULARIUM ecosystem

---

# Design Principles

The Order Management System (OMS) is designed according to the following architectural principles.

---

## Reader-Centered

Every business process begins and ends with the Reader.

The platform is designed to build long-term relationships rather than execute isolated sales.

---

## Business-Oriented

Every OMS function must support a measurable business objective.

Technology exists to serve the business process.

---

## Fully Traceable

Every transaction must be transparent, auditable and completely traceable throughout its entire lifecycle.

No important business event exists outside the system.

---

## Controlled Evolution

OMS evolves through completed, tested and approved implementation stages.

Future functionality extends the existing architecture without compromising system stability.

---

## Scalable by Design

The architecture is prepared for future growth.

New products, services and communication channels integrate into the existing OMS without requiring fundamental architectural redesign.

---

# Related Documents

- PROJECT-RULES.md
- ROADMAP.md
- EMAIL-DS-01.md

---

# Change History

| Version | Date | Description |
|----------|------------|----------------------------------------------|
| 1.0 | 2026-07-01 | Initial architecture specification |

---

**Approved for the PRACTICULARIUM Platform.**






                                                           # Customer Journey Model (CJM)

## Purpose

The Customer Journey Model defines the complete lifecycle of a person's interaction with the PRACTICULARIUM Platform.

Its purpose is to describe every major stage of the customer experience from the first visit to the platform through product purchase, product usage and future interaction with the PRACTICULARIUM ecosystem.

The Customer Journey serves as the highest-level business model for all customer-related processes within the platform.

---

## Business Meaning

The PRACTICULARIUM Platform is designed to build long-term relationships rather than execute isolated sales.

Every stage of the customer journey has a clear business purpose and supports the long-term development of the relationship between the author and the reader.

The Customer Journey provides a unified business model for OMS, Email System, CRM, Community and Business Analytics.

---

## Architecture

The Customer Journey consists of a primary lifecycle and optional relationship roles.

The primary lifecycle describes the mandatory customer path.

Relationship roles describe additional forms of interaction that may appear during the customer's journey.

Every transition is based on a confirmed business event and is recorded by the platform.

---

## Process Model

### Primary Customer Journey

```text
Visitor

↓

Prospect

↓

Customer

↓

Reader

↓

Returning Customer
```

### Optional Relationship Roles

```text
Community Member

Platform Advocate
```

These roles may be assigned independently after a customer begins interacting with the PRACTICULARIUM Platform.

---

## Stage Description

### Visitor

A person visiting the platform for the first time.

Business objective:

Introduce the PRACTICULARIUM Platform.

---

### Prospect

A visitor demonstrating interest in the platform or its products.

Business objective:

Convert interest into the first order.

---

### Customer

A person who has successfully placed an order.

Business objective:

Successfully complete the transaction.

---

### Reader

A customer who has received the ordered product and is interacting with it.

Business objective:

Create value through the product.

---

### Returning Customer

A reader who places additional orders.

Business objective:

Build long-term customer relationships.

---

### Community Member

A customer actively participating in the PRACTICULARIUM community.

Business objective:

Increase long-term engagement.

---

### Platform Advocate

A customer voluntarily recommending the PRACTICULARIUM Platform to others.

Business objective:

Support organic platform growth.

---

## Business Rules

The Primary Customer Journey always follows the defined sequence.

Relationship Roles are independent and may be assigned at different stages of the customer journey.

Every stage transition must be based on a confirmed business event.

Every transition must be recorded by the platform.

---

## System Responsibilities

OMS shall:

- identify the current customer stage;
- record every journey transition;
- maintain complete customer history;
- support communication workflows;
- provide data for business analytics.

---

## Success Criteria

The Customer Journey Model is considered successfully implemented when:

- every customer belongs to one primary journey stage;
- every stage transition is recorded;
- every business event is traceable;
- customer history is complete;
- the model supports future platform growth.

---

## Future Extensions

Future versions may include:

- customer segmentation;
- loyalty programme;
- recommendation engine;
- behavioural analytics;
- AI personal assistant;
- customer scoring.

---




                                                        # Business Process Model (BPM)

## Purpose

The Business Process Model defines the complete business workflow executed by the PRACTICULARIUM Platform from customer order creation to successful transaction completion.

Its purpose is to provide a controlled, transparent and repeatable business process.

---

## Business Meaning

Every customer order follows a predefined business process.

Each stage has a specific business objective, responsible actor and expected result.

The business process guarantees that every transaction is completed in a controlled and predictable manner.

---

## Architecture

The Business Process Model consists of sequential business stages.

Each stage begins only after the successful completion of the previous stage.

Every stage is supported by OMS and recorded in the platform.

---

## Process Model

```text
Customer Places Order

↓

Order Validation

↓

Order Confirmation

↓

Delivery Advance Received

↓

Book Preparation

↓

Packaging

↓

Shipment

↓

Book Delivered

↓

COD Transfer

↓

Payment Received on FOP Account

↓

Transaction Completed
```

---

## Stage Description

### Customer Places Order

The customer submits an order through the website.

Business objective:

Create a new transaction.

---

### Order Validation

OMS validates customer data and order information.

Business objective:

Ensure that the order can be processed.

---

### Order Confirmation

The administrator reviews and confirms the order.

Business objective:

Approve the transaction for execution.

---

### Delivery Advance Received

The customer pays the agreed delivery advance.

Business objective:

Reduce financial risk before shipment.

---

### Book Preparation

The ordered products are prepared for shipment.

Business objective:

Prepare the order for dispatch.

---

### Packaging

The products are packaged.

Business objective:

Protect the shipment.

---

### Shipment

The parcel is transferred to the delivery service.

Business objective:

Start the delivery process.

---

### Book Delivered

The customer receives the parcel.

Business objective:

Complete product delivery.

---

### COD Transfer

The delivery service transfers the payment.

Business objective:

Receive payment from the carrier.

---

### Payment Received on FOP Account

Funds are credited to the FOP bank account.

Business objective:

Complete the financial transaction.

---

### Transaction Completed

The transaction is officially closed.

Business objective:

Complete the business process and transfer the transaction to post-sale activities.

---

## Business Rules

Business stages are executed sequentially.

No stage may be skipped without administrator approval.

Every completed stage must be recorded by OMS.

Financial control is separated from logistics control.

A transaction is considered completed only after payment is received on the FOP account.

---

## System Responsibilities

OMS shall:

- control business workflow;
- record every completed stage;
- monitor transaction progress;
- support administrator decisions;
- provide complete transaction history.

---

## Success Criteria

The Business Process Model is considered successfully implemented when:

- every transaction follows the defined workflow;
- every business stage is recorded;
- every completed transaction is fully traceable;
- payment confirmation is recorded;
- the business process can be monitored at any time.

---

## Future Extensions

Future versions may include:

- automatic order confirmation;
- warehouse management;
- shipping automation;
- payment gateway integration;
- business process analytics.

---




                                                   # Financial Transaction Lifecycle (FTL)

## Purpose

The Financial Transaction Lifecycle defines the complete movement of financial resources during a customer transaction.

Its purpose is to separate financial risk management from business revenue while providing complete financial transparency and control.

---

## Business Meaning

A customer transaction contains two independent financial stages.

The first stage protects the business against financial risks before shipment.

The second stage completes the commercial transaction after funds are received on the FOP bank account.

A transaction is financially completed only after the payment has been successfully credited to the FOP account.

---

## Architecture

The Financial Transaction Lifecycle consists of two independent financial phases.

### Phase 1

Risk Protection

The customer pays the agreed delivery advance before shipment.

The purpose of this payment is to reduce business risks associated with delivery.

---

### Phase 2

Business Revenue

After successful delivery, the carrier transfers the remaining payment.

The transaction is considered financially completed only after the funds have been credited to the FOP bank account.

---

## Process Model

```text
Customer Places Order

↓

Delivery Advance Requested

↓

Delivery Advance Received

↓

Book Shipped

↓

Book Delivered

↓

Carrier Transfers COD

↓

Funds Received on FOP Account

↓

Revenue Confirmed

↓

Financial Transaction Completed
```

---

## Stage Description

### Delivery Advance Requested

The customer receives payment instructions for the delivery advance.

Business objective:

Reduce financial risk before shipment.

---

### Delivery Advance Received

OMS confirms receipt of the delivery advance.

Business objective:

Authorize shipment preparation.

---

### Book Shipped

The order is transferred to the delivery service.

Business objective:

Begin delivery process.

---

### Book Delivered

The customer successfully receives the order.

Business objective:

Complete product delivery.

---

### Carrier Transfers COD

The delivery service transfers the payment received from the customer.

Business objective:

Transfer business revenue.

---

### Funds Received on FOP Account

The transferred funds are credited to the FOP bank account.

Business objective:

Confirm business revenue.

---

### Revenue Confirmed

OMS confirms successful receipt of funds.

Business objective:

Complete financial verification.

---

### Financial Transaction Completed

The financial part of the transaction is officially completed.

Business objective:

Close the financial lifecycle.

---

## Business Rules

Financial risk protection is separated from business revenue.

Shipment begins only after confirmation of the required delivery advance.

Business revenue is recognised only after funds have been credited to the FOP bank account.

Every financial event must be recorded by OMS.

Every payment must be traceable.

---

## System Responsibilities

OMS shall:

- record every financial event;
- monitor payment progress;
- distinguish delivery advance from business revenue;
- verify financial completion;
- provide complete financial history.

---

## Success Criteria

The Financial Transaction Lifecycle is considered successfully implemented when:

- every financial event is recorded;
- delivery advance is confirmed before shipment;
- business revenue is confirmed after funds reach the FOP account;
- every payment is traceable;
- every completed transaction contains complete financial history.

---

## Future Extensions

Future versions may include:

- automatic payment verification;
- payment gateway integration;
- carrier API integration;
- automatic financial reconciliation;
- accounting system integration.

---




                                                           # Order Lifecycle

## Purpose

The Order Lifecycle defines the operational lifecycle of a customer order within the PRACTICULARIUM Platform.

Its purpose is to ensure that every order is created, processed, fulfilled and completed in a controlled and consistent manner.

---

## Business Meaning

An order is the operational object used to manage the execution of a customer's purchase.

Each order follows a predefined lifecycle from creation to completion.

The lifecycle provides full operational control over order execution.

---

## Architecture

The Order Lifecycle consists of sequential operational stages.

Each stage represents the current operational state of the order.

OMS records every stage and controls movement between them.

---

## Process Model

```text
Order Created

↓

Order Validated

↓

Order Confirmed

↓

Order In Preparation

↓

Order Packed

↓

Order Shipped

↓

Order Delivered

↓

Order Completed
```

---

## Stage Description

### Order Created

The customer submits an order through the website.

Business objective:

Register a new order.

---

### Order Validated

OMS validates the order information.

Business objective:

Ensure the order can be processed.

---

### Order Confirmed

The administrator confirms the order.

Business objective:

Approve order execution.

---

### Order In Preparation

The ordered products are prepared.

Business objective:

Prepare products for shipment.

---

### Order Packed

The products are packaged.

Business objective:

Prepare the shipment.

---

### Order Shipped

The parcel is transferred to the delivery service.

Business objective:

Start delivery.

---

### Order Delivered

The customer receives the parcel.

Business objective:

Complete delivery.

---

### Order Completed

The operational lifecycle of the order is completed.

Business objective:

Finish order execution.

---

## Business Rules

Every order receives a unique order number.

An order always belongs to one customer.

An order always has one current operational stage.

Every operational stage must be recorded.

Completed orders remain available for history and analytics.

Orders are never deleted.

---

## System Responsibilities

OMS shall:

- create new orders;
- assign order numbers;
- record operational stages;
- maintain complete order history;
- provide order tracking;
- support administrator operations.

---

## Success Criteria

The Order Lifecycle is considered successfully implemented when:

- every order has a unique identifier;
- every operational stage is recorded;
- order history is complete;
- order status is always known;
- completed orders remain available for future reference.

---

## Future Extensions

Future versions may include:

- partial shipments;
- multiple warehouses;
- order splitting;
- automatic fulfilment;
- warehouse inventory integration.

---




                                                      # Transaction Lifecycle

## Purpose

The Transaction Lifecycle defines the complete operational lifecycle of a customer transaction within the PRACTICULARIUM Platform.

Its purpose is to coordinate business processes, order execution and financial operations into a single controlled transaction.

---

## Business Meaning

A transaction represents the complete business relationship created by a customer order.

Unlike an order, a transaction includes operational, financial and business activities until the entire business process has been successfully completed.

The transaction is the primary business object monitored by OMS.

---

## Architecture

The Transaction Lifecycle integrates three independent business models:

- Business Process Model
- Financial Transaction Lifecycle
- Order Lifecycle

Together they form one complete customer transaction managed by OMS.

---

## Process Model

```text
Transaction Created

↓

Business Process Started

↓

Financial Protection Completed

↓

Order Executed

↓

Book Delivered

↓

Business Revenue Confirmed

↓

Post-Sale Activities

↓

Transaction Closed
```

---

## Stage Description

### Transaction Created

A new customer transaction is created after the order is successfully registered.

Business objective:

Create a controlled business process.

---

### Business Process Started

The transaction enters operational processing.

Business objective:

Begin order execution.

---

### Financial Protection Completed

The required delivery advance has been received.

Business objective:

Reduce financial risk before shipment.

---

### Order Executed

The order has been prepared, packed and shipped.

Business objective:

Complete operational execution.

---

### Book Delivered

The customer has successfully received the ordered product.

Business objective:

Complete product delivery.

---

### Business Revenue Confirmed

Funds have been successfully credited to the FOP bank account.

Business objective:

Complete the commercial transaction.

---

### Post-Sale Activities

Customer communication, feedback collection and follow-up activities may be performed.

Business objective:

Support long-term customer relationships.

---

### Transaction Closed

The complete business transaction is officially closed.

Business objective:

Finish the transaction lifecycle.

---

## Business Rules

Every order creates one transaction.

Every transaction has one unique transaction identifier.

A transaction combines operational, financial and business processes.

A transaction may only be closed after:

- order completion;
- payment confirmation on the FOP account;
- completion of required business activities.

Closed transactions remain available for reporting, analytics and future customer interactions.

---

## System Responsibilities

OMS shall:

- create and manage transactions;
- coordinate operational and financial processes;
- maintain transaction history;
- record all business events;
- provide complete transaction traceability.

---

## Success Criteria

The Transaction Lifecycle is considered successfully implemented when:

- every order belongs to one transaction;
- every transaction is fully traceable;
- operational and financial events are linked;
- transaction history is complete;
- completed transactions remain available for analytics.

---

## Future Extensions

Future versions may include:

- multi-order transactions;
- digital product transactions;
- subscription transactions;
- service transactions;
- automated transaction scoring.

---




                                                         # Order States

## Purpose

The Order States define the operational status of every order managed by the PRACTICULARIUM Platform.

Their purpose is to provide clear visibility of the current order condition throughout its lifecycle.

---

## Business Meaning

At any moment every order has one current operational state.

The current state reflects the progress of order execution and allows both administrators and OMS to determine the next required action.

---

## Architecture

Order States represent operational progress only.

Business processes and financial processes are managed independently by their respective models.

OMS synchronizes these models while maintaining one current operational state for each order.

---

## Order States

| State | Description |
|--------|-------------|
| New | Order has been created. |
| Validated | Order information has been verified. |
| Confirmed | Order approved for processing. |
| In Preparation | Products are being prepared. |
| Packed | Order has been packed. |
| Shipped | Order transferred to the delivery service. |
| Delivered | Customer received the order. |
| Completed | Operational lifecycle completed. |
| Cancelled | Order cancelled before completion. |

---

## Business Rules

Every order has exactly one current state.

Only authorized users may change an order state.

Every state change must be recorded by OMS.

Completed and cancelled orders remain available for history and analytics.

Order states are immutable history records once recorded.

---

## System Responsibilities

OMS shall:

- assign the initial order state;
- update order states;
- record every state change;
- display the current order state;
- maintain complete state history.

---

## Success Criteria

The Order States are considered successfully implemented when:

- every order has one current state;
- every state transition is recorded;
- state history is complete;
- administrators always know the current operational status.

---

## Future Extensions

Future versions may include:

- custom order states;
- automated state changes;
- user-defined workflows;
- SLA monitoring;
- operational performance metrics.

---




                                                        # State Transitions

## Purpose

The State Transition Model defines the allowed movement between Order States within the PRACTICULARIUM Platform.

Its purpose is to ensure that every order follows a controlled and predictable operational workflow.

---

## Business Meaning

State transitions determine how an order progresses through its operational lifecycle.

Only predefined transitions are permitted.

Every transition represents a confirmed business event.

---

## Architecture

Each order begins with the **New** state.

Orders move through the operational workflow according to business rules.

OMS validates every transition before updating the current order state.

---

## Transition Model

```text
New

↓

Validated

↓

Confirmed

↓

In Preparation

↓

Packed

↓

Shipped

↓

Delivered

↓

Completed
```

An order may also transition to:

```text
Cancelled
```

Cancellation is allowed only before the order reaches the **Completed** state.

---

## Business Rules

State transitions follow the predefined sequence.

Skipping operational states is not permitted without administrator approval.

Only authorized users may perform manual state transitions.

OMS records every transition together with the date and time.

Completed orders cannot return to previous states.

Cancelled orders cannot be reactivated.

---

## System Responsibilities

OMS shall:

- validate every state transition;
- reject invalid transitions;
- record transition history;
- update the current order state;
- maintain complete audit information.

---

## Success Criteria

The State Transition Model is considered successfully implemented when:

- every transition follows the defined workflow;
- invalid transitions are prevented;
- every transition is recorded;
- the current state is always known;
- complete transition history is available.

---

## Future Extensions

Future versions may include:

- automatic transitions;
- conditional transitions;
- parallel workflows;
- approval workflows;
- configurable transition rules.

---




                                                       # Notifications

## Purpose

The Notification System defines how OMS informs customers and administrators about important business events during the transaction lifecycle.

Its purpose is to ensure timely communication, improve transparency and support successful transaction completion.

---

## Business Meaning

Notifications provide communication between the PRACTICULARIUM Platform, the customer and the administrator.

Every notification is triggered by a confirmed business event.

Notifications inform users but do not change the business process.

---

## Architecture

Notifications are event-driven.

OMS generates business events.

The Notification System determines whether a notification should be sent.

Notifications may be delivered to:

- Customer
- Administrator

---

## Notification Events

| Business Event | Customer | Administrator |
|----------------|:--------:|:-------------:|
| Order Created | ✅ | ✅ |
| Order Confirmed | ✅ | — |
| Delivery Advance Required | ✅ | — |
| Delivery Advance Received | ✅ | ✅ |
| Order Shipped | ✅ | — |
| Order Delivered | ✅ | — |
| Payment Received on FOP Account | — | ✅ |
| Transaction Completed | ✅ | ✅ |

---

## Business Rules

Notifications are sent only after a confirmed business event.

Each notification is sent once unless manually repeated by the administrator.

Failed notifications are recorded by OMS.

Notification history remains available for every transaction.

All customer notifications shall use the official PRACTICULARIUM Email Template System (EMAIL-DS-01).

---

## System Responsibilities

OMS shall:

- generate notification events;
- send notifications;
- record notification history;
- report delivery errors;
- support future notification channels.

---

## Success Criteria

The Notification System is considered successfully implemented when:

- every required business event generates the appropriate notification;
- notification history is recorded;
- failed notifications are identifiable;
- customers and administrators receive the required information.

---

## Future Extensions

Future versions may include:

- SMS notifications;
- Telegram notifications;
- WhatsApp notifications;
- Push notifications;
- Mobile application notifications;
- Marketing campaigns.

---



                                                   # Administration

## Purpose

The Administration Model defines the responsibilities and operational functions of the administrator within the PRACTICULARIUM Platform.

Its purpose is to ensure controlled management of customer transactions throughout their lifecycle.

---

## Business Meaning

The administrator supervises the business process and ensures that every transaction is processed correctly.

The administrator supports the customer, verifies business events and resolves exceptional situations when required.

---

## Architecture

OMS provides administrative tools for monitoring and managing customer transactions.

The administrator interacts with OMS through the administration interface.

Every administrative action is recorded by the system.

---

## Administrator Responsibilities

The administrator may:

- review customer orders;
- validate order information;
- confirm customer orders;
- monitor payment status;
- update order states;
- monitor shipment progress;
- review transaction history;
- resend notifications;
- communicate with customers when required.

---

## Business Rules

Administrative actions require appropriate authorization.

Every administrative action must be recorded by OMS.

The administrator may manually update transaction information when business circumstances require it.

Completed transactions remain available for review but cannot be modified.

---

## System Responsibilities

OMS shall:

- authenticate administrators;
- provide administrative access;
- record administrative actions;
- maintain administrator activity history;
- support transaction management.

---

## Success Criteria

The Administration Model is considered successfully implemented when:

- administrators can manage customer transactions;
- every administrative action is recorded;
- transaction history remains complete;
- operational control is maintained throughout the business process.

---

## Future Extensions

Future versions may include:

- multiple administrator roles;
- role-based permissions;
- activity dashboard;
- workload monitoring;
- administrator performance reports;
- AI Administration Assistant.

---




                                                         # Analytics

## Purpose

The Analytics Model defines how OMS collects and provides business information about customer transactions.

Its purpose is to support business decisions through reliable operational and financial data.

---

## Business Meaning

Every completed transaction generates valuable business information.

Analytics help evaluate platform performance, monitor sales, improve customer service and support future business development.

---

## Architecture

OMS collects analytics automatically during the transaction lifecycle.

Business events generated by OMS become the primary source of analytical information.

Analytics are based on recorded business data and do not modify transaction history.

---

## Analytics Areas

OMS provides analytics for:

- Orders
- Transactions
- Payments
- Deliveries
- Customers
- Business Performance

---

## Business Rules

Analytics are generated only from recorded business events.

Historical data is never modified.

Reports always reflect the current business information available in OMS.

---

## System Responsibilities

OMS shall:

- collect business statistics;
- calculate operational metrics;
- provide financial summaries;
- support business reporting;
- maintain historical analytical data.

---

## Success Criteria

The Analytics Model is considered successfully implemented when:

- every completed transaction contributes to analytics;
- reports are based on recorded business data;
- historical information remains available;
- business performance can be evaluated.

---

## Future Extensions

Future versions may include:

- sales dashboard;
- KPI monitoring;
- customer behaviour analytics;
- revenue forecasting;
- AI business insights;
- predictive analytics.

---




                                                          # Future Extensions

## Purpose

The Future Extensions define the planned long-term evolution of the Order Management System (OMS).

Their purpose is to ensure that the current architecture supports future platform growth without requiring fundamental redesign.

Future Extensions do not affect the implementation of the current production version.

---

## Business Meaning

The PRACTICULARIUM Platform is designed for continuous development.

New functionality will be introduced only after the successful launch, stabilization and validation of the current production system.

Future extensions shall always preserve compatibility with the existing OMS architecture.

---

## Architecture

OMS is designed as a scalable business platform.

Future functionality extends the existing architecture rather than replacing it.

Every future subsystem shall integrate through the existing business models defined in this document.

---

## Planned Extensions

The following functionality is planned for future platform versions.

### Business

- Multi-product orders
- Digital products
- Online courses
- Subscription services
- Gift certificates

---

### Customer Experience

- Customer accounts
- Loyalty programme
- Recommendation system
- Customer segmentation
- Personal offers

---

### Administration

- AI Administration Assistant
- Advanced administration dashboard
- Role-based permissions
- Workflow automation

---

### Analytics

- AI Business Insights
- Sales forecasting
- Customer behaviour analytics
- KPI dashboard
- Predictive analytics

---

### Integrations

- Payment gateway integration
- Carrier API integration
- Accounting system integration
- CRM integration
- Mobile application

---

## Business Rules

Future functionality shall never compromise the stability of the production platform.

Every extension must provide measurable business value.

Every extension follows the official PRACTICULARIUM development process:

Architecture

↓

Approval

↓

Implementation

↓

Testing

↓

Release

---

## System Responsibilities

OMS shall provide an architecture capable of supporting future expansion while maintaining compatibility with existing business processes.

---

## Success Criteria

The Future Extensions Model is considered successful when:

- new functionality integrates without architectural redesign;
- business processes remain consistent;
- historical data remains compatible;
- platform stability is preserved.

---

# OMS Version Scope

OMS Version 1.0 provides all functionality required for controlled customer transactions and production sales.

Future functionality will be implemented only after successful deployment and operational validation of Version 1.0.

---

# Conclusion

The Order Management System (OMS) serves as the operational core of the PRACTICULARIUM Platform.

It provides complete management of customer transactions, business processes, financial operations and operational control.

OMS establishes the architectural foundation for future platform development while ensuring that the current production version remains focused on delivering a reliable and fully controlled sales system.

---








# Платформа PRACTICULARIUM

# OMS-01

# Система управления заказами (Order Management System)

## Архитектурная спецификация

**Версия:** 1.0

**Статус:** APPROVED

**Последнее обновление:** 2026-07-01

---

# Назначение

Настоящий документ определяет архитектуру Системы управления заказами (Order Management System, OMS), используемой платформой PRACTICULARIUM.

OMS предназначена для управления полным жизненным циклом каждой сделки с клиентом.

Основная задача системы — обеспечить полностью контролируемый бизнес-процесс, который начинается с первого заказа клиента и завершается успешным выполнением сделки, последующим взаимодействием с клиентом и аналитической обработкой результатов.

OMS является операционным ядром платформы PRACTICULARIUM, обеспечивая полную прозрачность, управляемость и прослеживаемость каждой сделки.

---


# Область применения

OMS охватывает все бизнес-процессы, связанные с обработкой заказов клиентов в рамках платформы PRACTICULARIUM.

В область ответственности системы входят:

- регистрация заказов клиентов;
- проверка заказов;
- управление сделками;
- контроль платежей;
- подготовка книг к отправке;
- упаковка заказов;
- отправка заказов;
- подтверждение доставки;
- подтверждение поступления оплаты;
- завершение сделки;
- взаимодействие с клиентом;
- послепродажное сопровождение;
- сбор обратной связи;
- бизнес-аналитика;
- управление долгосрочными отношениями с клиентами.

---


# Концепция развития

OMS проектируется как операционное сердце платформы PRACTICULARIUM.

Долгосрочная цель системы — обеспечить полный контроль над каждой сделкой с клиентом, одновременно создавая прозрачный, понятный и масштабируемый бизнес-процесс.

По мере развития платформы OMS должна оставаться центральной системой, объединяющей читателей, продукты, коммуникации и бизнес-аналитику.

---


# Архитектурная философия

Платформа PRACTICULARIUM создается не как обычный интернет-магазин книг.

Она проектируется как единая экосистема взаимоотношений с читателями.

Заказы являются лишь одной из составляющих значительно более широкого жизненного цикла клиента.

Главная задача платформы — формирование долгосрочных отношений между автором и читателем.

Каждая подсистема PRACTICULARIUM существует именно для достижения этой цели.

---





# Основные принципы

---

## Принцип 1

### Читатель прежде всего

Центральным объектом платформы является Читатель.

Заказы, платежи, доставка и коммуникации существуют как элементы жизненного цикла читателя.

---

## Принцип 2

### Управление сделками

OMS управляет не отдельными заказами, а полным жизненным циклом сделки.

Сделка начинается с первого взаимодействия клиента с платформой и завершается только после полного выполнения всех бизнес-процессов.

---

## Принцип 3

### Полный жизненный цикл

Каждая сделка проходит через контролируемый жизненный цикл.

Ни один этап не существует вне системы.

Каждое значимое бизнес-событие обязательно фиксируется.

---

## Принцип 4

### Полная прослеживаемость

Каждая сделка должна быть полностью прослеживаемой.

Платформа всегда должна позволять получить ответы на следующие вопросы:

- Что произошло?
- Когда это произошло?
- Кто выполнил действие?
- Каков текущий статус?
- Какое действие должно быть выполнено следующим?

---

## Принцип 5

### Автоматизация прежде всего

Повторяющиеся бизнес-процессы должны автоматизироваться везде, где это возможно.

Автоматизация снижает объем ручной работы, сохраняя полный контроль над бизнес-процессами.

---

## Принцип 6

### Контроль со стороны человека

Автоматизация никогда не заменяет ответственность за принятие бизнес-решений.

Все критически важные решения всегда остаются за администратором системы.

---

## Принцип 7

### Контролируемое развитие

Система управления заказами (OMS) должна поддерживать дальнейшее развитие платформы PRACTICULARIUM без необходимости полного архитектурного перепроектирования.

Новые продукты, услуги и каналы коммуникации интегрируются в существующую архитектуру OMS.

Развитие платформы осуществляется по модели последовательного внедрения.

Каждый уровень развития должен быть полностью реализован, протестирован и утвержден до начала следующего этапа.

Новая функциональность внедряется только в том случае, если она приносит измеримую бизнес-ценность, соответствует текущей миссии проекта и не требует несоразмерной переработки существующей системы.

---




# Бизнес-цель

Цель OMS заключается не просто в обработке заказов клиентов.

Основная задача системы — управлять полным жизненным циклом сделки, одновременно выстраивая долгосрочные отношения между читателем и платформой PRACTICULARIUM.

Каждая успешно завершенная сделка должна:

- повышать доверие клиента;
- увеличивать удовлетворенность читателя;
- формировать ценную бизнес-аналитику;
- создавать возможности для дальнейшего взаимодействия;
- способствовать устойчивому развитию экосистемы PRACTICULARIUM.

---

# Принципы проектирования

Система управления заказами (OMS) проектируется в соответствии со следующими архитектурными принципами.

---

## Ориентация на читателя

Каждый бизнес-процесс начинается и завершается взаимодействием с читателем.

Платформа создается для формирования долгосрочных отношений, а не для выполнения отдельных продаж.

---

## Ориентация на бизнес

Каждая функция OMS должна решать конкретную бизнес-задачу.

Технологии существуют для поддержки бизнес-процессов, а не наоборот.

---

## Полная прослеживаемость

Каждая сделка должна быть прозрачной, проверяемой и полностью прослеживаемой на протяжении всего жизненного цикла.

Ни одно значимое бизнес-событие не должно существовать вне системы.

---

## Контролируемое развитие

OMS развивается поэтапно.

Каждый новый этап должен быть завершен, протестирован и утвержден до перехода к следующему.

Новая функциональность расширяет существующую архитектуру, не нарушая стабильность системы.

---

## Масштабируемость по замыслу

Архитектура изначально проектируется с учетом дальнейшего развития.

Новые продукты, услуги и каналы взаимодействия должны интегрироваться в существующую систему без необходимости фундаментального изменения архитектуры.

---

# Связанные документы

- PROJECT-RULES.md
- ROADMAP.md
- EMAIL-DS-01.md

---

# История изменений

| Версия | Дата | Описание |
|---------|------------|----------------------------------------------|
| 1.0 | 2026-07-01 | Первая утвержденная архитектурная спецификация |

---

**Утверждено для платформы PRACTICULARIUM.**






# Модель пути клиента (Customer Journey Model, CJM)

## Назначение

Модель пути клиента определяет полный жизненный цикл взаимодействия человека с платформой PRACTICULARIUM.

Ее назначение — описать все основные этапы взаимодействия клиента с платформой: от первого посещения сайта до покупки продукта, его использования и дальнейшего развития отношений с экосистемой PRACTICULARIUM.

Модель пути клиента является бизнес-моделью верхнего уровня для всех процессов, связанных с клиентами.

---

## Бизнес-смысл

Платформа PRACTICULARIUM создается для формирования долгосрочных отношений с читателями, а не для выполнения отдельных продаж.

Каждый этап пути клиента имеет четко определенную бизнес-цель и способствует развитию долгосрочных отношений между автором и читателем.

Модель пути клиента формирует единый бизнес-фундамент для OMS, системы электронной почты, CRM, сообщества и бизнес-аналитики.

---

## Архитектура

Модель пути клиента состоит из основного жизненного цикла и дополнительных ролей взаимодействия.

Основной жизненный цикл описывает обязательный путь клиента.

Дополнительные роли отражают различные формы взаимодействия с платформой, которые могут возникать на любом этапе жизненного цикла.

Каждый переход между этапами происходит только после подтвержденного бизнес-события и фиксируется системой.

---

## Модель процесса

### Основной путь клиента

```text
Посетитель

↓

Потенциальный клиент

↓

Клиент

↓

Читатель

↓

Постоянный клиент
```

### Дополнительные роли

```text
Участник сообщества

Амбассадор платформы
```

Эти роли могут присваиваться независимо после начала взаимодействия клиента с платформой PRACTICULARIUM.

---

## Описание этапов

### Посетитель

Человек, впервые посетивший платформу.

**Бизнес-цель:**

Познакомить пользователя с платформой PRACTICULARIUM.

---

### Потенциальный клиент

Посетитель, проявивший интерес к платформе или ее продуктам.

**Бизнес-цель:**

Преобразовать интерес в первый заказ.

---

### Клиент

Человек, успешно оформивший заказ.

**Бизнес-цель:**

Успешно начать выполнение сделки.

---

### Читатель

Клиент, получивший заказанный продукт и взаимодействующий с ним.

**Бизнес-цель:**

Создать ценность посредством продукта.

---

### Постоянный клиент

Читатель, оформивший повторный заказ.

**Бизнес-цель:**

Формировать долгосрочные отношения с клиентом.

---

### Участник сообщества

Клиент, активно участвующий в жизни сообщества PRACTICULARIUM.

**Бизнес-цель:**

Повышать долгосрочную вовлеченность.

---

### Амбассадор платформы

Клиент, добровольно рекомендующий платформу PRACTICULARIUM другим людям.

**Бизнес-цель:**

Способствовать органическому развитию платформы.

---

## Правила бизнеса

Основной путь клиента всегда проходит в установленной последовательности.

Дополнительные роли являются независимыми и могут назначаться на различных этапах жизненного цикла клиента.

Каждый переход между этапами должен подтверждаться бизнес-событием.

Каждый переход обязательно фиксируется системой.

---

## Обязанности системы

OMS должна:

- определять текущий этап жизненного цикла клиента;
- фиксировать каждый переход между этапами;
- хранить полную историю взаимодействия с клиентом;
- поддерживать процессы коммуникации;
- предоставлять данные для бизнес-аналитики.

---

## Критерии успешности

Модель пути клиента считается успешно реализованной, если:

- каждый клиент находится только на одном основном этапе жизненного цикла;
- каждый переход между этапами фиксируется системой;
- каждое бизнес-событие является прослеживаемым;
- история взаимодействия с клиентом хранится полностью;
- модель поддерживает дальнейшее развитие платформы.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- сегментация клиентов;
- программа лояльности;
- система рекомендаций;
- анализ поведения клиентов;
- персональный AI-помощник;
- система оценки клиентов.

---





# Модель бизнес-процессов (Business Process Model, BPM)

## Назначение

Модель бизнес-процессов определяет полный рабочий процесс платформы PRACTICULARIUM — от оформления заказа клиентом до успешного завершения сделки.

Ее назначение — обеспечить контролируемый, прозрачный и повторяемый бизнес-процесс.

---

## Бизнес-смысл

Каждый заказ клиента проходит через заранее определенный бизнес-процесс.

Каждый этап имеет собственную бизнес-цель, ответственного исполнителя и ожидаемый результат.

Данная модель гарантирует, что каждая сделка будет выполнена управляемо, последовательно и предсказуемо.

---

## Архитектура

Модель бизнес-процессов состоит из последовательных этапов.

Каждый следующий этап начинается только после успешного завершения предыдущего.

Все этапы поддерживаются OMS и фиксируются системой.

---

## Модель процесса

```text
Клиент оформляет заказ

↓

Проверка заказа

↓

Подтверждение заказа

↓

Получение предоплаты за доставку

↓

Подготовка книги

↓

Упаковка

↓

Отправка

↓

Доставка книги

↓

Перечисление наложенного платежа

↓

Поступление денежных средств на счет ФОП

↓

Завершение сделки
```

---

## Описание этапов

### Клиент оформляет заказ

Клиент оформляет заказ через сайт.

**Бизнес-цель:**

Создать новую сделку.

---

### Проверка заказа

OMS проверяет корректность данных клиента и заказа.

**Бизнес-цель:**

Убедиться, что заказ может быть выполнен.

---

### Подтверждение заказа

Администратор проверяет и подтверждает заказ.

**Бизнес-цель:**

Разрешить выполнение сделки.

---

### Получение предоплаты за доставку

Клиент оплачивает согласованную предоплату за доставку.

**Бизнес-цель:**

Минимизировать финансовые риски до отправки заказа.

---

### Подготовка книги

Заказанные книги подготавливаются к отправке.

**Бизнес-цель:**

Подготовить заказ к комплектации.

---

### Упаковка

Книги упаковываются.

**Бизнес-цель:**

Обеспечить безопасную транспортировку.

---

### Отправка

Посылка передается службе доставки.

**Бизнес-цель:**

Начать процесс доставки.

---

### Доставка книги

Клиент получает заказ.

**Бизнес-цель:**

Завершить доставку продукта.

---

### Перечисление наложенного платежа

Служба доставки перечисляет полученные денежные средства.

**Бизнес-цель:**

Получить оплату от перевозчика.

---

### Поступление денежных средств на счет ФОП

Денежные средства поступают на банковский счет ФОП.

**Бизнес-цель:**

Завершить финансовую часть сделки.

---

### Завершение сделки

Сделка официально считается завершенной.

**Бизнес-цель:**

Полностью завершить бизнес-процесс и перевести сделку в этап послепродажного сопровождения.

---

## Правила бизнеса

Все этапы выполняются строго последовательно.

Ни один этап не может быть пропущен без подтверждения администратора.

Каждый завершенный этап обязательно фиксируется системой.

Финансовый контроль отделен от логистического контроля.

Сделка считается завершенной только после поступления денежных средств на счет ФОП.

---

## Обязанности системы

OMS должна:

- управлять выполнением бизнес-процесса;
- фиксировать завершение каждого этапа;
- отслеживать ход выполнения сделки;
- поддерживать принятие решений администратором;
- хранить полную историю выполнения сделки.

---

## Критерии успешности

Модель бизнес-процессов считается успешно реализованной, если:

- каждая сделка проходит установленный бизнес-процесс;
- каждый этап фиксируется системой;
- каждая завершенная сделка полностью прослеживается;
- подтверждение поступления оплаты зарегистрировано;
- состояние бизнес-процесса можно определить в любой момент времени.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- автоматическое подтверждение заказов;
- управление складом;
- автоматизация отправки;
- интеграция с платежными системами;
- аналитика бизнес-процессов.

---





# Жизненный цикл финансовой сделки (Financial Transaction Lifecycle, FTL)

## Назначение

Жизненный цикл финансовой сделки определяет полный путь движения денежных средств в рамках сделки с клиентом.

Его назначение — разделить управление финансовыми рисками и получение дохода, обеспечивая при этом полную прозрачность, контролируемость и прослеживаемость финансовых операций.

---

## Бизнес-смысл

Финансовая модель сделки состоит из двух независимых этапов.

Первый этап предназначен для снижения финансовых рисков до отправки заказа.

Второй этап завершает коммерческую часть сделки после поступления денежных средств на банковский счет ФОП.

Финансовая сделка считается завершенной только после фактического зачисления денежных средств на счет ФОП.

---

## Архитектура

Жизненный цикл финансовой сделки состоит из двух независимых фаз.

### Фаза 1

### Защита финансовых рисков

До отправки заказа клиент оплачивает согласованную предоплату за доставку.

Назначение данного платежа — минимизировать финансовые риски, связанные с выполнением доставки.

---

### Фаза 2

### Получение дохода

После успешной доставки перевозчик перечисляет основную сумму оплаты.

Финансовая сделка считается завершенной только после поступления денежных средств на банковский счет ФОП.

---

## Модель процесса

```text
Клиент оформляет заказ

↓

Запрос предоплаты за доставку

↓

Предоплата за доставку получена

↓

Книга отправлена

↓

Книга доставлена

↓

Перевозчик перечисляет наложенный платеж

↓

Денежные средства поступили на счет ФОП

↓

Доход подтвержден

↓

Финансовая сделка завершена
```

---

## Описание этапов

### Запрос предоплаты за доставку

Клиент получает информацию и реквизиты для внесения предоплаты за доставку.

**Бизнес-цель:**

Минимизировать финансовые риски до отправки заказа.

---

### Предоплата за доставку получена

OMS подтверждает получение предоплаты.

**Бизнес-цель:**

Разрешить подготовку заказа к отправке.

---

### Книга отправлена

Заказ передан службе доставки.

**Бизнес-цель:**

Начать процесс доставки.

---

### Книга доставлена

Клиент успешно получил заказ.

**Бизнес-цель:**

Завершить доставку товара.

---

### Перевозчик перечисляет наложенный платеж

Служба доставки перечисляет денежные средства, полученные от клиента.

**Бизнес-цель:**

Передать доход продавцу.

---

### Денежные средства поступили на счет ФОП

Полученные средства зачислены на банковский счет ФОП.

**Бизнес-цель:**

Подтвердить получение дохода.

---

### Доход подтвержден

OMS подтверждает успешное поступление денежных средств.

**Бизнес-цель:**

Завершить финансовую проверку сделки.

---

### Финансовая сделка завершена

Финансовая часть сделки официально считается завершенной.

**Бизнес-цель:**

Закрыть финансовый цикл сделки.

---

## Правила бизнеса

Защита финансовых рисков отделена от получения дохода.

Отправка заказа начинается только после подтверждения необходимой предоплаты.

Доход признается полученным только после поступления денежных средств на банковский счет ФОП.

Каждое финансовое событие обязательно фиксируется системой OMS.

Каждый платеж должен быть полностью прослеживаемым.

---

## Обязанности системы

OMS должна:

- фиксировать каждое финансовое событие;
- отслеживать выполнение платежей;
- различать предоплату за доставку и основной доход;
- подтверждать завершение финансовой сделки;
- хранить полную финансовую историю.

---

## Критерии успешности

Жизненный цикл финансовой сделки считается успешно реализованным, если:

- каждое финансовое событие зарегистрировано;
- предоплата подтверждена до отправки заказа;
- получение дохода подтверждено после поступления средств на счет ФОП;
- каждый платеж полностью прослеживается;
- каждая завершенная сделка содержит полную финансовую историю.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- автоматическая проверка поступления платежей;
- интеграция с платежными системами;
- интеграция с API служб доставки;
- автоматическая финансовая сверка;
- интеграция с бухгалтерскими системами.

---






# Жизненный цикл заказа (Order Lifecycle)

## Назначение

Жизненный цикл заказа определяет операционный путь каждого заказа клиента в рамках платформы PRACTICULARIUM.

Его назначение — обеспечить контролируемое, последовательное и предсказуемое выполнение каждого заказа.

---

## Бизнес-смысл

Заказ является операционным объектом, посредством которого осуществляется выполнение покупки клиента.

Каждый заказ проходит заранее определенный жизненный цикл — от момента создания до полного завершения.

Данная модель обеспечивает полный контроль над выполнением заказа.

---

## Архитектура

Жизненный цикл заказа состоит из последовательных операционных этапов.

Каждый этап отражает текущее состояние выполнения заказа.

OMS фиксирует каждый этап и управляет переходами между ними.

---

## Модель процесса

```text
Заказ создан

↓

Заказ проверен

↓

Заказ подтвержден

↓

Заказ подготавливается

↓

Заказ упакован

↓

Заказ отправлен

↓

Заказ доставлен

↓

Заказ завершен
```

---

## Описание этапов

### Заказ создан

Клиент оформил заказ через сайт.

**Бизнес-цель:**

Зарегистрировать новый заказ.

---

### Заказ проверен

OMS проверяет корректность данных заказа.

**Бизнес-цель:**

Убедиться в возможности выполнения заказа.

---

### Заказ подтвержден

Администратор подтверждает выполнение заказа.

**Бизнес-цель:**

Разрешить обработку заказа.

---

### Заказ подготавливается

Заказанные товары подготавливаются к отправке.

**Бизнес-цель:**

Подготовить продукцию к упаковке.

---

### Заказ упакован

Товары упакованы.

**Бизнес-цель:**

Подготовить заказ к транспортировке.

---

### Заказ отправлен

Посылка передана службе доставки.

**Бизнес-цель:**

Начать процесс доставки.

---

### Заказ доставлен

Клиент получил заказ.

**Бизнес-цель:**

Завершить доставку.

---

### Заказ завершен

Операционный цикл заказа официально завершен.

**Бизнес-цель:**

Полностью завершить выполнение заказа.

---

## Правила бизнеса

Каждый заказ получает уникальный номер.

Каждый заказ принадлежит только одному клиенту.

Каждый заказ имеет только одно текущее операционное состояние.

Каждый этап выполнения заказа обязательно фиксируется системой.

Завершенные заказы сохраняются для истории и аналитики.

Заказы никогда не удаляются.

---

## Обязанности системы

OMS должна:

- создавать новые заказы;
- присваивать номера заказов;
- фиксировать этапы выполнения;
- хранить полную историю заказа;
- обеспечивать отслеживание заказа;
- поддерживать работу администратора.

---

## Критерии успешности

Жизненный цикл заказа считается успешно реализованным, если:

- каждый заказ имеет уникальный идентификатор;
- каждый этап выполнения зарегистрирован;
- история заказа хранится полностью;
- текущее состояние заказа всегда известно;
- завершенные заказы доступны для дальнейшего анализа.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- частичные отправки;
- работа с несколькими складами;
- разделение заказа на несколько отправлений;
- автоматическое выполнение заказов;
- интеграция с системой складского учета.

---






# Жизненный цикл сделки (Transaction Lifecycle)

## Назначение

Жизненный цикл сделки определяет полный операционный цикл взаимодействия с клиентом в рамках платформы PRACTICULARIUM.

Его назначение — объединить бизнес-процессы, выполнение заказа и финансовые операции в единую контролируемую систему управления сделкой.

---

## Бизнес-смысл

Сделка представляет собой полную совокупность взаимоотношений между клиентом и платформой, возникающих после оформления заказа.

В отличие от самого заказа, сделка включает в себя операционные, финансовые и бизнес-процессы вплоть до полного завершения всех обязательств перед клиентом.

Именно сделка является основным бизнес-объектом, которым управляет OMS.

---

## Архитектура

Жизненный цикл сделки объединяет три независимые бизнес-модели:

- Модель бизнес-процессов;
- Жизненный цикл финансовой сделки;
- Жизненный цикл заказа.

Совместно они формируют единую сделку, полностью управляемую системой OMS.

---

## Модель процесса

```text
Сделка создана

↓

Бизнес-процесс начат

↓

Финансовая защита завершена

↓

Заказ выполнен

↓

Книга доставлена

↓

Получение дохода подтверждено

↓

Послепродажное сопровождение

↓

Сделка закрыта
```

---

## Описание этапов

### Сделка создана

После регистрации заказа создается новая сделка.

**Бизнес-цель:**

Создать контролируемый бизнес-процесс.

---

### Бизнес-процесс начат

Сделка переходит в стадию выполнения.

**Бизнес-цель:**

Начать обработку заказа.

---

### Финансовая защита завершена

Предоплата за доставку успешно получена.

**Бизнес-цель:**

Минимизировать финансовые риски до отправки заказа.

---

### Заказ выполнен

Заказ полностью подготовлен, упакован и передан службе доставки.

**Бизнес-цель:**

Завершить операционную часть сделки.

---

### Книга доставлена

Клиент успешно получил заказ.

**Бизнес-цель:**

Завершить передачу продукта клиенту.

---

### Получение дохода подтверждено

Денежные средства успешно поступили на банковский счет ФОП.

**Бизнес-цель:**

Завершить коммерческую часть сделки.

---

### Послепродажное сопровождение

Выполняются мероприятия по дальнейшему взаимодействию с клиентом:

- получение обратной связи;
- отправка дополнительных уведомлений;
- предложение других продуктов;
- поддержание долгосрочных отношений.

**Бизнес-цель:**

Развивать долгосрочные отношения с клиентом.

---

### Сделка закрыта

Все обязательства сторон выполнены.

Сделка официально считается завершенной.

**Бизнес-цель:**

Полностью завершить жизненный цикл сделки.

---

## Правила бизнеса

Каждый заказ создает одну сделку.

Каждая сделка имеет уникальный идентификатор.

Сделка объединяет операционные, финансовые и бизнес-процессы.

Сделка может быть закрыта только после:

- завершения выполнения заказа;
- подтверждения поступления денежных средств на счет ФОП;
- выполнения обязательных мероприятий послепродажного сопровождения.

Закрытые сделки сохраняются для отчетности, аналитики и дальнейшего взаимодействия с клиентами.

---

## Обязанности системы

OMS должна:

- создавать и сопровождать сделки;
- координировать операционные и финансовые процессы;
- хранить полную историю сделки;
- регистрировать все бизнес-события;
- обеспечивать полную прослеживаемость сделки.

---

## Критерии успешности

Жизненный цикл сделки считается успешно реализованным, если:

- каждый заказ связан с одной сделкой;
- каждая сделка полностью прослеживается;
- операционные и финансовые события взаимосвязаны;
- история сделки хранится полностью;
- завершенные сделки доступны для последующего анализа.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- сделки с несколькими заказами;
- сделки с цифровыми продуктами;
- сделки по подписке;
- сделки по оказанию услуг;
- автоматическая оценка сделок.

---






# Состояния заказа (Order States)

## Назначение

Состояния заказа определяют текущее операционное состояние каждого заказа, обрабатываемого платформой PRACTICULARIUM.

Их назначение — обеспечить наглядное отображение текущего этапа выполнения заказа на протяжении всего его жизненного цикла.

---

## Бизнес-смысл

В каждый момент времени заказ может находиться только в одном текущем состоянии.

Текущее состояние отражает степень выполнения заказа и позволяет как администратору, так и OMS определить следующее необходимое действие.

---

## Архитектура

Состояния заказа отражают исключительно операционный процесс выполнения заказа.

Бизнес-процессы и финансовые процессы управляются собственными моделями.

OMS синхронизирует работу всех моделей, сохраняя для каждого заказа одно текущее состояние.

---

## Состояния заказа

| Состояние | Описание |
|------------|------------------------------------------------|
| Новый | Заказ зарегистрирован. |
| Проверен | Проверка данных успешно завершена. |
| Подтвержден | Заказ подтвержден администратором. |
| Подготавливается | Выполняется подготовка заказа. |
| Упакован | Заказ полностью упакован. |
| Отправлен | Передан службе доставки. |
| Доставлен | Клиент получил заказ. |
| Завершен | Выполнение заказа полностью завершено. |
| Отменен | Заказ отменен до завершения выполнения. |

---

## Правила бизнеса

Каждый заказ имеет только одно текущее состояние.

Изменение состояния допускается только уполномоченными пользователями.

Каждое изменение состояния обязательно фиксируется системой OMS.

История состояний сохраняется полностью.

Завершенные и отмененные заказы доступны для истории и аналитики.

---

## Обязанности системы

OMS должна:

- назначать первоначальное состояние заказа;
- изменять состояние заказа;
- фиксировать каждое изменение;
- отображать текущее состояние;
- хранить полную историю изменений.

---

## Критерии успешности

Модель состояний заказа считается успешно реализованной, если:

- каждый заказ имеет только одно текущее состояние;
- каждое изменение состояния зарегистрировано;
- история изменений полностью сохранена;
- текущее состояние заказа всегда известно.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- пользовательские состояния;
- автоматическое изменение состояний;
- настраиваемые рабочие процессы;
- контроль SLA;
- показатели эффективности выполнения заказов.

---




# Переходы между состояниями (State Transitions)

## Назначение

Модель переходов между состояниями определяет допустимые изменения состояний заказа в рамках платформы PRACTICULARIUM.

Ее назначение — обеспечить контролируемое, последовательное и предсказуемое выполнение каждого заказа.

---

## Бизнес-смысл

Переходы между состояниями определяют порядок продвижения заказа по его жизненному циклу.

Допускаются только заранее определенные переходы.

Каждый переход является подтвержденным бизнес-событием.

---

## Архитектура

Каждый новый заказ начинается с состояния **«Новый»**.

Далее заказ проходит все предусмотренные этапы в соответствии с установленными правилами бизнеса.

Перед изменением состояния OMS проверяет допустимость выполняемого перехода.

---

## Модель переходов

```text
Новый

↓

Проверен

↓

Подтвержден

↓

Подготавливается

↓

Упакован

↓

Отправлен

↓

Доставлен

↓

Завершен
```

Заказ также может перейти в состояние:

```text
Отменен
```

Отмена допускается только до момента завершения заказа.

---

## Правила бизнеса

Переходы между состояниями выполняются только в установленной последовательности.

Пропуск этапов не допускается без подтверждения администратора.

Ручное изменение состояния может выполнять только уполномоченный пользователь.

OMS фиксирует каждый переход с указанием даты и времени.

После завершения заказа возврат к предыдущим состояниям невозможен.

Отмененный заказ не может быть повторно активирован.

---

## Обязанности системы

OMS должна:

- проверять корректность каждого перехода;
- отклонять недопустимые переходы;
- сохранять историю переходов;
- обновлять текущее состояние заказа;
- обеспечивать полный журнал изменений.

---

## Критерии успешности

Модель переходов считается успешно реализованной, если:

- каждый переход соответствует установленным правилам;
- недопустимые переходы блокируются системой;
- каждый переход фиксируется;
- текущее состояние заказа всегда известно;
- полная история переходов доступна для просмотра.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- автоматические переходы между состояниями;
- условные переходы;
- параллельные рабочие процессы;
- процессы согласования;
- настраиваемые правила переходов.







# Система уведомлений (Notifications)

## Назначение

Система уведомлений определяет порядок информирования клиентов и администраторов о важных событиях, происходящих в процессе выполнения сделки.

Ее назначение — обеспечить своевременную коммуникацию, повысить прозрачность бизнес-процессов и поддержать успешное завершение каждой сделки.

---

## Бизнес-смысл

Система уведомлений обеспечивает взаимодействие между платформой PRACTICULARIUM, клиентом и администратором.

Каждое уведомление формируется только после подтвержденного бизнес-события.

Уведомления информируют участников процесса, но не изменяют сам бизнес-процесс.

---

## Архитектура

Система уведомлений работает по событийной модели.

OMS формирует бизнес-события.

Система уведомлений определяет необходимость отправки сообщения.

Получателями уведомлений могут быть:

- Клиент;
- Администратор.

---

## События, вызывающие отправку уведомлений

| Бизнес-событие | Клиент | Администратор |
|----------------|:------:|:-------------:|
| Заказ создан | ✅ | ✅ |
| Заказ подтвержден | ✅ | — |
| Запрошена предоплата за доставку | ✅ | — |
| Получена предоплата за доставку | ✅ | ✅ |
| Заказ отправлен | ✅ | — |
| Заказ доставлен | ✅ | — |
| Денежные средства поступили на счет ФОП | — | ✅ |
| Сделка завершена | ✅ | ✅ |

---

## Правила бизнеса

Уведомления отправляются только после подтвержденного бизнес-события.

Каждое уведомление отправляется один раз, если администратор не инициировал повторную отправку.

Информация о неудачных попытках доставки уведомлений обязательно фиксируется системой.

История всех уведомлений сохраняется для каждой сделки.

Все уведомления клиентам формируются с использованием официальной системы шаблонов электронной почты PRACTICULARIUM (EMAIL-DS-01).

---

## Обязанности системы

OMS должна:

- формировать события для отправки уведомлений;
- отправлять уведомления;
- сохранять историю уведомлений;
- фиксировать ошибки доставки;
- обеспечивать возможность подключения новых каналов уведомлений.

---

## Критерии успешности

Система уведомлений считается успешно реализованной, если:

- каждое предусмотренное бизнес-событие вызывает соответствующее уведомление;
- история уведомлений сохраняется полностью;
- ошибки доставки можно определить и проанализировать;
- клиенты и администраторы своевременно получают необходимую информацию.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- SMS-уведомления;
- уведомления в Telegram;
- уведомления в WhatsApp;
- Push-уведомления;
- уведомления мобильного приложения;
- маркетинговые рассылки.

---




# Администрирование (Administration)

## Назначение

Модель администрирования определяет обязанности администратора и основные функции управления системой в рамках платформы PRACTICULARIUM.

Ее назначение — обеспечить полный контроль над выполнением сделок с клиентами на протяжении всего их жизненного цикла.

---

## Бизнес-смысл

Администратор контролирует выполнение бизнес-процессов и обеспечивает корректное сопровождение каждой сделки.

При необходимости администратор оказывает поддержку клиентам, подтверждает выполнение бизнес-событий и принимает решения в нестандартных ситуациях.

---

## Архитектура

OMS предоставляет администратору инструменты для контроля и управления всеми сделками.

Взаимодействие администратора с системой осуществляется через административный интерфейс.

Каждое действие администратора фиксируется системой.

---

## Обязанности администратора

Администратор может:

- просматривать поступившие заказы;
- проверять данные заказа;
- подтверждать выполнение заказов;
- контролировать поступление оплаты;
- изменять состояние заказа;
- отслеживать процесс доставки;
- просматривать историю сделки;
- повторно отправлять уведомления;
- взаимодействовать с клиентами при необходимости.

---

## Правила бизнеса

Все административные действия требуют соответствующих прав доступа.

Каждое действие администратора обязательно фиксируется системой OMS.

При возникновении объективной необходимости администратор может вручную обновить информацию о сделке.

После завершения сделки ее данные доступны только для просмотра и не подлежат изменению.

---

## Обязанности системы

OMS должна:

- выполнять аутентификацию администратора;
- предоставлять доступ к административным функциям;
- фиксировать все действия администратора;
- хранить историю действий администратора;
- обеспечивать управление сделками.

---

## Критерии успешности

Модель администрирования считается успешно реализованной, если:

- администратор может управлять всеми сделками;
- каждое действие администратора регистрируется системой;
- история выполнения сделок сохраняется полностью;
- контроль бизнес-процессов обеспечивается на протяжении всего жизненного цикла сделки.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- несколько ролей администраторов;
- разграничение прав доступа;
- панель мониторинга администратора;
- контроль рабочей нагрузки;
- отчеты по эффективности работы администраторов;
- AI-помощник администратора.

---





# Аналитика (Analytics)

## Назначение

Модель аналитики определяет порядок сбора, обработки и предоставления бизнес-информации о сделках с клиентами.

Ее назначение — обеспечить принятие управленческих решений на основе достоверных операционных и финансовых данных.

---

## Бизнес-смысл

Каждая завершенная сделка формирует ценную информацию для развития платформы.

Аналитика позволяет оценивать эффективность работы системы, контролировать продажи, повышать качество обслуживания клиентов и принимать решения по дальнейшему развитию бизнеса.

---

## Архитектура

OMS автоматически собирает аналитические данные на протяжении всего жизненного цикла сделки.

Основным источником аналитики являются зарегистрированные системой бизнес-события.

Аналитические данные строятся исключительно на основании сохраненной информации и не изменяют историю сделок.

---

## Области аналитики

OMS предоставляет аналитическую информацию по следующим направлениям:

- заказы;
- сделки;
- платежи;
- доставки;
- клиенты;
- показатели эффективности бизнеса.

---

## Правила бизнеса

Аналитика формируется исключительно на основании зарегистрированных бизнес-событий.

Исторические данные никогда не изменяются.

Все отчеты строятся на основе актуальной информации, содержащейся в OMS.

---

## Обязанности системы

OMS должна:

- собирать бизнес-статистику;
- рассчитывать операционные показатели;
- формировать финансовые сводки;
- поддерживать формирование отчетов;
- хранить исторические аналитические данные.

---

## Критерии успешности

Модель аналитики считается успешно реализованной, если:

- каждая завершенная сделка участвует в аналитике;
- все отчеты формируются на основе зарегистрированных данных;
- историческая информация сохраняется полностью;
- эффективность бизнеса может быть объективно оценена.

---

## Перспективы развития

В будущих версиях системы могут быть реализованы:

- панель аналитики продаж;
- мониторинг KPI;
- анализ поведения клиентов;
- прогнозирование доходов;
- AI-аналитик бизнеса;
- прогнозная аналитика.

---

# Перспективы развития (Future Extensions)





## Назначение

Настоящий раздел определяет направления дальнейшего развития Системы управления заказами (OMS).

Его назначение — обеспечить возможность масштабирования платформы без необходимости изменения фундаментальной архитектуры.

Все перечисленные расширения относятся к будущим версиям системы и не влияют на реализацию текущей рабочей версии.

---

## Бизнес-смысл

Платформа PRACTICULARIUM проектируется как постоянно развивающаяся программная система.

Новая функциональность внедряется только после успешного запуска, стабилизации и подтверждения работоспособности текущей производственной версии.

Любые расширения должны сохранять совместимость с существующей архитектурой OMS.

---

## Архитектура

OMS проектируется как масштабируемая бизнес-платформа.

Будущая функциональность расширяет существующую архитектуру, а не заменяет ее.

Каждая новая подсистема должна интегрироваться через существующие бизнес-модели, определенные настоящим документом.

---

## Планируемые направления развития

### Бизнес

- работа с несколькими товарами в одном заказе;
- цифровые продукты;
- онлайн-курсы;
- сервисы по подписке;
- подарочные сертификаты.

---

### Клиентский сервис

- личные кабинеты клиентов;
- программа лояльности;
- система рекомендаций;
- сегментация клиентов;
- персонализированные предложения.

---

### Администрирование

- AI-помощник администратора;
- расширенная административная панель;
- гибкое разграничение прав доступа;
- автоматизация рабочих процессов.

---

### Аналитика

- AI-аналитик бизнеса;
- прогнозирование продаж;
- анализ поведения клиентов;
- панель KPI;
- прогнозная аналитика.

---

### Интеграции

- интеграция с платежными системами;
- интеграция с API служб доставки;
- интеграция с бухгалтерскими системами;
- интеграция с CRM;
- мобильное приложение.

---

## Правила бизнеса

Будущая функциональность никогда не должна снижать стабильность рабочей версии платформы.

Каждое новое расширение должно приносить измеримую бизнес-ценность.

Все расширения реализуются в соответствии с официальным процессом разработки PRACTICULARIUM.

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

---

## Обязанности системы

OMS должна обеспечивать архитектурную основу, позволяющую расширять функциональность без нарушения совместимости с существующими бизнес-процессами.

---

## Критерии успешности

Модель перспективного развития считается успешно реализованной, если:

- новая функциональность интегрируется без изменения базовой архитектуры;
- бизнес-процессы сохраняют целостность;
- исторические данные остаются совместимыми;
- стабильность платформы не нарушается.

---




# Границы версии OMS 1.0

Версия OMS 1.0 включает всю функциональность, необходимую для управления сделками клиентов и запуска контролируемой системы продаж.

Дальнейшее развитие системы начинается только после успешного внедрения, проверки и подтверждения стабильной работы версии 1.0.

---




# Заключение

Система управления заказами (OMS) является операционным ядром платформы PRACTICULARIUM.

Она обеспечивает комплексное управление сделками с клиентами, бизнес-процессами, финансовыми операциями и операционным контролем.

OMS формирует архитектурную основу дальнейшего развития платформы, сохраняя при этом главную цель текущей версии — создание надежной, полностью контролируемой системы продаж.

---