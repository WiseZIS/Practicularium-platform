# PRACTICULARIUM Platform

# CSP-01

# Controlled Sales Process

## Business Process Specification

**Version:** 1.0

**Status:** IN PROGRESS

**Last Update:** 2026-07-02

---

# Purpose

This document defines the official Controlled Sales Process (CSP) of the PRACTICULARIUM Platform.

The Controlled Sales Process describes the complete business transaction lifecycle — from the moment a customer creates an order until the transaction is fully completed, including financial confirmation, delivery control and post-sale communication.

CSP-01 serves as the primary business process specification of the platform and defines how every customer transaction must be performed.

---

# Scope

The Controlled Sales Process covers every business stage related to customer transactions, including:

- customer interaction;
- order creation;
- order verification;
- delivery preparation;
- shipment management;
- financial control;
- transaction completion;
- customer communication;
- post-sale support;
- business analytics.

---

# Business Mission

The objective of the Controlled Sales Process is not simply to sell books.

Its mission is to create a fully controlled transaction where every significant business event is visible, traceable and manageable.

Every customer transaction should successfully progress from the first customer interaction to confirmed revenue received on the FOP account.

The platform must always know:

- what happened;
- when it happened;
- who performed the action;
- what the current transaction status is;
- what business event should happen next.

---

# Architecture Philosophy

The Controlled Sales Process coordinates every subsystem participating in the customer transaction lifecycle.

It does not replace OMS.

It does not replace EMAIL-DS.

It does not replace carrier integrations.

Instead, CSP defines how all business subsystems cooperate during every transaction.

Every subsystem performs its own responsibility while CSP defines the overall business workflow.

---



# Core Principles

---

## Principle 1

### Customer-Centered

Every transaction begins with a customer request and ends only after successful completion of all business obligations.

---

## Principle 2

### Controlled Transactions

Every customer transaction must remain under business control from the first order until confirmed revenue.

No important business event may occur outside the platform.

---

## Principle 3

### Event-Based Management

The transaction progresses only after confirmed business events.

Business events determine the movement of the transaction through its lifecycle.

---

## Principle 4

### Financial Protection

Shipment begins only after the required delivery prepayment has been confirmed.

The platform minimizes financial risks before any shipment is created.

---

## Principle 5

### Delivery Transparency

Every shipment must remain traceable throughout the complete delivery process.

The platform always knows the current delivery status.

---

## Principle 6

### Revenue Confirmation

A transaction is not considered financially completed until the revenue has been confirmed on the FOP account.

If automatic confirmation is unavailable, administrator confirmation becomes the official business event.

---

## Principle 7

### Automation First

Every repetitive business operation should be automated whenever practical.

Manual operations remain only where automation is technically unavailable or economically unreasonable.

---

## Principle 8

### Architecture Independence

Business processes must remain independent from specific payment providers, carriers or banks.

Changing integrations must never require redesigning the Controlled Sales Process.

---




# Business Participants

The Controlled Sales Process coordinates interactions between all participants involved in the transaction.

| Participant | Responsibility |
|-------------|------------------------------------------------|
| Customer | Creates orders, performs payments, receives products, provides feedback |
| OMS | Controls transaction lifecycle and business events |
| EMAIL-DS | Delivers transactional communication |
| Administrator | Supervises the transaction and confirms exceptional events |
| Carrier | Delivers shipments and reports delivery events |
| Payment System | Processes delivery prepayments (current or future implementation) |
| Bank | Confirms receipt of business revenue on the FOP account |
| Analytics | Collects business metrics after transaction completion |

---



# Business Subsystems

The Controlled Sales Process coordinates several independent business subsystems.

```text
Website

↓

OMS

↓

EMAIL-DS

↓

Carrier Integration

↓

Payment Processing

↓

Bank Confirmation

↓

Business Analytics
```

Each subsystem has independent responsibilities while participating in one unified controlled business transaction.

---




# Controlled Sales Lifecycle

## Purpose

The Controlled Sales Lifecycle defines the complete business transaction workflow of the PRACTICULARIUM Platform.

It describes every significant business event from the moment a customer submits an order until the transaction is completely finished, including financial confirmation and post-sale communication.

The Controlled Sales Lifecycle is the operational foundation of the platform.

---




# Business Lifecycle

Every transaction progresses through a predefined sequence of business events.

Each event has:

- one responsible participant;
- one expected business result;
- one following business event.

A transaction never skips business events.

---




# Controlled Sales Process

| № | Business Event | Description | Responsible | Current Status | Automation |
|---:|------------------------------|------------------------------------------------|----------------|----------------|------------------------------|
| **1** | Customer visits website | Customer explores the platform and products | Customer | ✅ | Not required |
| ↓ |
| **2** | Order submitted | Customer completes the order form | Customer | ✅ | Fully automated |
| ↓ |
| **3** | Order validation | OMS validates submitted data | OMS | ✅ | Fully automated |
| ↓ |
| **4** | Order created | OMS creates the official transaction | OMS | ✅ | Fully automated |
| ↓ |
| **5** | Order stored | Transaction stored in Supabase | OMS | ✅ | Fully automated |
| ↓ |
| **6** | Customer notified | Order confirmation email | EMAIL-DS | ✅ | Fully automated |
| ↓ |
| **7** | Administrator notified | New order notification | EMAIL-DS | ✅ | Fully automated |
| ↓ |
| **8** | Manual order review | Administrator verifies customer information | Administrator | ⏳ | Manual |
| ↓ |
| **9** | Order approved | Administrator confirms transaction | Administrator | ⏳ | OMS Assisted |
| ↓ |
| **10** | Delivery cost calculated | OMS calculates delivery cost | OMS | ❌ | Carrier API |
| ↓ |
| **11** | Prepayment request prepared | OMS prepares delivery prepayment request | OMS | ❌ | Fully automated |
| ↓ |
| **12** | Payment parameters configured | Administrator selects payment destination for this transaction | Administrator | ❌ | Semi-automated |
| ↓ |
| **13** | Prepayment request delivered | Customer receives payment instructions | EMAIL-DS | ❌ | Fully automated |
| ↓ |
| **14** | Delivery prepayment received | Customer pays delivery prepayment | Customer | ❌ | External payment |
| ↓ |
| **15** | Prepayment confirmed | OMS confirms successful payment | OMS / Administrator | ❌ | Semi-automated → Future automatic |
| ↓ |
| **16** | Shipping label created | OMS creates carrier shipment | OMS | ❌ | Carrier API |
| ↓ |
| **17** | Tracking number received | OMS stores tracking number | OMS | ❌ | Fully automated |
| ↓ |
| **18** | Shipping documents received | OMS receives printable shipment documents | OMS | ❌ | Fully automated |
| ↓ |
| **19** | Order packed | Shipment prepared | Administrator | ⏳ | Manual |
| ↓ |
| **20** | Shipment handed to carrier | Package transferred | Administrator | ⏳ | Manual |
| ↓ |
| **21** | Shipment confirmed | OMS confirms carrier acceptance | OMS | ❌ | Carrier API |
| ↓ |
| **22** | Customer receives tracking information | Tracking email sent | EMAIL-DS | ❌ | Fully automated |
| ↓ |
| **23** | Delivery monitored | OMS tracks shipment status | OMS | ❌ | Carrier API |
| ↓ |
| **24** | Shipment arrives | Carrier reports arrival | Carrier API | ❌ | Fully automated |
| ↓ |
| **25** | Shipment collected | Carrier confirms customer pickup | Carrier API | ❌ | Fully automated |
| ↓ |
| **26** | Delivery completed | OMS closes delivery process | OMS | ❌ | Fully automated |
| ↓ |
| **27** | Revenue confirmation pending | OMS waits for revenue confirmation | OMS | ❌ | Automatic / Manual |
| ↓ |
| **28** | Revenue confirmed | Bank API or Administrator confirms revenue | Bank / OMS / Administrator | ❌ | Semi-automated |
| ↓ |
| **29** | Financial transaction completed | OMS closes financial process | OMS | ❌ | Fully automated |
| ↓ |
| **30** | Transaction closed | Business transaction officially completed | OMS | ❌ | Fully automated |
| ↓ |
| **31** | Thank-you email | Customer receives appreciation email | EMAIL-DS | ❌ | Fully automated |
| ↓ |
| **32** | Review request | Customer receives review invitation | EMAIL-DS | ❌ | Fully automated |
| ↓ |
| **33** | Future recommendations | Platform recommends additional products | EMAIL-DS | ❌ | Fully automated |
| ↓ |
| **34** | Transaction archived | OMS archives completed transaction | OMS | ❌ | Fully automated |
| ↓ |
| **35** | Business analytics updated | OMS updates business statistics | OMS | ❌ | Fully automated |

---




# Lifecycle Rules

Every transaction follows exactly one lifecycle.

Each business event occurs only after successful completion of the previous event.

Each business event is permanently recorded.

Business events cannot be skipped without administrator authorization.

Completed transactions become immutable business history.

---




# Success Criteria

A Controlled Sales Process is considered successful only when:

- the order has been successfully completed;
- delivery has been completed;
- revenue has been confirmed;
- the transaction has been officially closed;
- post-sale communication has been completed;
- business analytics has been updated.

Only after all business events have been completed may the transaction be considered fully finished.

---



# Business Events

## Purpose

Business Events define every significant event that changes the state of a customer transaction.

The Controlled Sales Process is entirely event-driven.

A transaction progresses only after a business event has been successfully completed and confirmed.

Business Events synchronize every subsystem participating in the transaction lifecycle.

---




# Business Event Principles

Every business event must satisfy the following requirements.

- It represents a completed business action.
- It changes the transaction state.
- It is permanently recorded.
- It has one responsible participant.
- It triggers the next business event.
- It may generate notifications.
- It may trigger automation.

Business events cannot occur outside the platform.

---




# Business Events

| № | Business Event | Trigger | Responsible | Next Event |
|---:|------------------------------|--------------------------------------|----------------|--------------------------------|
| 1 | Customer Order Submitted | Customer submits order form | Customer | Order Validation |
| 2 | Order Validated | OMS validates customer information | OMS | Order Approval |
| 3 | Order Approved | Administrator confirms transaction | Administrator | Delivery Cost Calculation |
| 4 | Delivery Cost Calculated | OMS receives delivery calculation | OMS | Prepayment Request |
| 5 | Prepayment Request Sent | EMAIL-DS delivers payment instructions | EMAIL-DS | Customer Payment |
| 6 | Delivery Prepayment Confirmed | Payment confirmation received | OMS / Administrator | Shipping Label Creation |
| 7 | Shipping Label Created | Carrier accepts shipment creation | OMS | Package Preparation |
| 8 | Package Handed to Carrier | Shipment transferred | Administrator | Shipment Monitoring |
| 9 | Shipment Delivered | Carrier confirms customer receipt | Carrier | Revenue Confirmation |
| 10 | Revenue Confirmed | Bank API or Administrator confirms payment | Bank / Administrator | Transaction Closed |
| 11 | Transaction Closed | OMS completes transaction | OMS | Post-sale Communication |
| 12 | Post-sale Communication Completed | EMAIL-DS completes customer follow-up | EMAIL-DS | Analytics Update |
| 13 | Analytics Updated | OMS updates business metrics | OMS | Transaction Archived |

---




# Business Event Categories

Business Events are grouped into independent categories.

### Customer Events

- Order Submitted
- Delivery Prepayment Received
- Shipment Collected
- Review Submitted

---

### OMS Events

- Order Created
- Order Validated
- Transaction Closed
- Analytics Updated

---

### Administrator Events

- Order Approved
- Revenue Confirmed
- Manual Transaction Actions

---

### Carrier Events

- Shipping Label Created
- Shipment Accepted
- Shipment Delivered

---

### Financial Events

- Delivery Prepayment Confirmed
- Revenue Confirmed

---

### Communication Events

- Customer Notification
- Administrator Notification
- Review Request
- Thank-you Message

---




# Business Event Rules

Business Events are immutable.

Completed events are never deleted.

Business Events always remain attached to their transaction.

Each event contains:

- timestamp;
- responsible participant;
- transaction identifier;
- event category;
- event result;
- optional notes.

---




# Financial Control

## Purpose

Financial Control guarantees that every customer transaction remains financially protected.

Financial Control separates delivery expenses from business revenue.

This separation minimizes financial risks while maintaining complete transaction transparency.

---




# Financial Philosophy

The Controlled Sales Process recognizes two independent financial stages.

The first stage protects the shipment.

The second stage confirms business revenue.

A transaction is financially completed only after revenue confirmation.

---




# Financial Lifecycle

```text
Delivery Cost Calculated

↓

Prepayment Requested

↓

Prepayment Confirmed

↓

Shipment Created

↓

Shipment Delivered

↓

Revenue Pending

↓

Revenue Confirmed

↓

Financial Transaction Closed
```

---




# Financial Rules

Shipment creation is prohibited before delivery prepayment confirmation.

Revenue confirmation is the official financial completion event.

Revenue confirmation may originate from:

- Bank API;
- Administrator confirmation.

The business process remains identical regardless of the confirmation source.

---




# Revenue Confirmation

Revenue Confirmation is one of the most important business events in the entire platform.

OMS never assumes that revenue has been received.

Revenue becomes official only after confirmation.

This design allows future integration with banks without changing the Controlled Sales Process.

---




# Financial Success Criteria

Financial Control is considered successful when:

- delivery risks have been protected;
- shipment has been completed;
- revenue has been confirmed;
- financial transaction has been closed;
- financial history has been permanently recorded.

---




# Delivery Control

## Purpose

Delivery Control defines how the PRACTICULARIUM Platform manages every shipment after the customer transaction has been approved.

Its objective is to ensure that every shipment remains visible, traceable and controllable until the customer successfully receives the ordered product.

Delivery Control manages logistics.

It does not manage financial operations.

---




# Delivery Philosophy

The platform never loses visibility of a shipment.

Every shipment must always have a known delivery status.

Every change of delivery status becomes a Business Event recorded by OMS.

Delivery information is obtained from the carrier whenever automatic integration is available.

If automatic integration is unavailable, the administrator records the corresponding business event.

The business process remains unchanged.

Only the source of information changes.

---





# Delivery Lifecycle

```text
Order Approved

↓

Delivery Cost Calculated

↓

Delivery Prepayment Confirmed

↓

Shipping Label Created

↓

Shipment Packed

↓

Shipment Handed to Carrier

↓

Shipment Accepted

↓

Shipment In Transit

↓

Shipment Arrived

↓

Shipment Collected

↓

Delivery Completed
```

---





# Delivery Events

| № | Delivery Event | Trigger | Responsible | Automation |
|---:|-------------------------------|------------------------------------|----------------|----------------------------|
| 1 | Delivery Cost Calculated | OMS completes delivery calculation | OMS | Automatic |
| 2 | Delivery Prepayment Confirmed | Payment received | OMS / Administrator | Semi-automatic |
| 3 | Shipping Label Created | Carrier API creates shipment | OMS | Automatic |
| 4 | Shipment Packed | Package prepared | Administrator | Manual |
| 5 | Shipment Handed to Carrier | Package transferred | Administrator | Manual |
| 6 | Shipment Accepted | Carrier accepts shipment | Carrier API | Automatic |
| 7 | Shipment In Transit | Shipment moves through carrier network | Carrier API | Automatic |
| 8 | Shipment Arrived | Shipment available for pickup | Carrier API | Automatic |
| 9 | Shipment Collected | Customer receives shipment | Carrier API | Automatic |
| 10 | Delivery Completed | OMS closes delivery lifecycle | OMS | Automatic |

---





# Delivery Rules

A shipment may be created only after delivery prepayment has been confirmed.

Every shipment must have:

- shipment identifier;
- carrier;
- tracking number;
- current delivery status;
- complete delivery history.

OMS never assumes delivery completion.

Delivery is completed only after confirmation from the carrier or administrator.

---





# Delivery Monitoring

OMS continuously monitors shipment status.

Whenever delivery status changes:

- the corresponding Business Event is created;
- transaction history is updated;
- notifications are generated if required;
- the next business process becomes available.

Shipment monitoring remains active until Delivery Completed has been confirmed.

---





# Delivery Success Criteria

Delivery Control is considered successful when:

- every shipment has been successfully delivered;
- every delivery event has been recorded;
- shipment history is complete;
- OMS always knows the current shipment status.

---





# Customer Communication

## Purpose

Customer Communication defines every interaction between the PRACTICULARIUM Platform and the customer during the Controlled Sales Process.

Communication exists to inform, support and strengthen customer confidence throughout the transaction.

Communication never controls business logic.

It reflects confirmed Business Events generated by OMS.

---





# Communication Philosophy

Every customer should always understand:

- what has happened;
- what is happening now;
- what will happen next.

Good communication reduces uncertainty.

Clear communication builds trust.

Trust increases long-term customer relationships.

---





# Communication Lifecycle

```text
Order Created

↓

Order Confirmed

↓

Prepayment Requested

↓

Prepayment Confirmed

↓

Shipment Created

↓

Shipment Sent

↓

Shipment Delivered

↓

Revenue Confirmed

↓

Thank You

↓

Review Request

↓

Future Product Recommendations
```

---





# Communication Rules

Every communication message is triggered by a Business Event.

Customers never receive duplicate transactional emails unless initiated by the administrator.

Every message is permanently recorded.

Every message is generated from EMAIL-DS templates.

Communication remains multilingual.

The customer's selected platform language determines the language of every transactional message.

---





# Communication Channels

Current channels:

- Email

Future channels:

- SMS
- Telegram
- WhatsApp
- Push Notifications
- Mobile Application

---




# Communication Success Criteria

Customer Communication is considered successful when:

- every Business Event generates the correct communication;
- customers remain informed during the complete transaction;
- communication history is permanently stored;
- customer confidence is maintained throughout the entire Controlled Sales Process.

---





# Automation Points

## Purpose

Automation Points define how the PRACTICULARIUM Platform gradually transforms manual business operations into controlled automated processes.

Automation is introduced only after the corresponding business process has been approved, tested and proven stable.

The objective of automation is not to replace people.

Its objective is to increase reliability, reduce operational workload and improve transaction control.

Business processes always remain unchanged.

Only their execution becomes more automated.

---




# Automation Philosophy

The Controlled Sales Process is the permanent business model of the platform.

Automation is only a method of executing that model.

The introduction of automation never changes business rules.

Instead, automation replaces repetitive manual operations while preserving the approved transaction lifecycle.

This principle guarantees that future technical improvements will never require redesigning the business architecture.

---




# Automation Levels

The PRACTICULARIUM Platform recognizes four levels of automation.

| Level | Description |
|--------|--------------------------------------------------------------|
| Manual | The operation is performed entirely by a person. |
| Assisted | OMS supports the administrator while the final decision remains manual. |
| Semi-Automatic | OMS performs part of the operation while waiting for external confirmation. |
| Fully Automatic | OMS completes the operation without administrator involvement after receiving the required Business Event. |

---




# Current Automation Status

| Business Process | Current State | Target State |
|------------------------------|-----------------|-------------------------|
| Customer Order Submission | Fully Automatic | Fully Automatic |
| Order Validation | Fully Automatic | Fully Automatic |
| Order Approval | Assisted | Assisted |
| Delivery Cost Calculation | Manual | Fully Automatic |
| Delivery Prepayment | Manual | Semi-Automatic |
| Shipping Label Creation | Manual | Fully Automatic |
| Shipment Tracking | Manual | Fully Automatic |
| Revenue Confirmation | Manual | Semi-Automatic |
| Customer Communication | Fully Automatic | Fully Automatic |
| Business Analytics | Semi-Automatic | Fully Automatic |

---




# Automation Principles

Automation is introduced only when it provides measurable business value.

Automation must never reduce business transparency.

Every automated action must remain traceable.

Every automated decision must be reversible whenever business rules require administrator intervention.

OMS always records whether an action was performed manually or automatically.

---




# Success Criteria

Automation is considered successful when:

- repetitive work decreases;
- transaction reliability increases;
- business transparency improves;
- administrator workload decreases;
- the Controlled Sales Process remains unchanged.

---





# Exception Handling

## Purpose

Exception Handling defines how the PRACTICULARIUM Platform manages business situations that deviate from the standard Controlled Sales Process.

The objective is not to eliminate exceptions.

The objective is to ensure that every exceptional situation remains controlled, traceable and recoverable.

No business exception should result in the loss of transaction control.

---




# Exception Philosophy

Business exceptions are considered normal business events.

An exception does not terminate the Controlled Sales Process.

Instead, it creates an alternative controlled business path.

Every exception must:

- remain visible;
- be recorded;
- have an assigned responsible participant;
- have a defined recovery process;
- preserve transaction history.

---




# Exception Categories

The Controlled Sales Process recognizes the following categories of exceptions.

### Customer Exceptions

- customer entered incorrect information;
- customer failed to complete delivery prepayment;
- customer requested order cancellation;
- customer requested order modification;
- customer failed to collect shipment.

---

### Financial Exceptions

- delivery prepayment was not received;
- payment confirmation failed;
- revenue confirmation delayed;
- payment discrepancy detected.

---

### Delivery Exceptions

- shipment creation failed;
- carrier rejected shipment;
- shipment delayed;
- shipment returned;
- shipment lost;
- shipment damaged.

---

### Technical Exceptions

- OMS service unavailable;
- Email delivery failed;
- Carrier API unavailable;
- Payment




# Exception Handling

## Purpose

Exception Handling defines how the PRACTICULARIUM Platform manages business situations that deviate from the standard Controlled Sales Process.

Its objective is to preserve transaction integrity, maintain business control and ensure that every exceptional situation can be successfully resolved.

Business exceptions are considered part of the normal business lifecycle.

They never invalidate the Controlled Sales Process.

---




# Exception Philosophy

Unexpected situations are inevitable in any business.

The objective of the platform is not to eliminate exceptions, but to manage them in a controlled, transparent and predictable manner.

Every exception becomes a registered Business Event.

Every exception has:

- a clearly defined cause;
- an assigned responsible participant;
- a controlled resolution process;
- complete history.

No exception may result in the loss of transaction control.

---




# Exception Categories

Business exceptions are grouped according to their origin.

### Customer Exceptions

- incorrect customer information;
- incomplete delivery prepayment;
- customer cancellation request;
- customer requests order modification;
- customer fails to collect shipment.

---

### Financial Exceptions

- delivery prepayment not received;
- payment confirmation delayed;
- payment discrepancy detected;
- revenue confirmation delayed.

---

### Delivery Exceptions

- shipment creation failed;
- carrier rejected shipment;
- shipment delayed;
- shipment returned;
- shipment lost;
- shipment damaged.

---

### Communication Exceptions

- email delivery failed;
- customer mailbox unavailable;
- notification rejected;
- repeated delivery failure.

---

### Technical Exceptions

- OMS unavailable;
- Carrier API unavailable;
- Payment service unavailable;
- Database unavailable;
- Network interruption.

---

# Exception Resolution Principles

Every exception follows the same resolution model.

```text
Exception Detected

↓

Business Event Created

↓

Responsible Participant Assigned

↓

Resolution Performed

↓

Business Event Confirmed

↓

Transaction Continues
```


# Exception Resolution Model

Every business exception follows one unified resolution process.

```text
Exception Detected

↓

Business Event Created

↓

Responsible Participant Assigned

↓

Situation Analysis

↓

Corrective Action

↓

Resolution Confirmed

↓

Business Event Recorded

↓

Controlled Sales Process Continues
```


This model guarantees that every exception remains under business control.

The transaction never disappears from the platform.

Only its execution path changes.

---



# Exception Rules

Every exception must be permanently recorded.

Every exception receives its own timestamp.

Every exception is linked to one transaction.

The platform always records:

- the reason;
- the responsible participant;
- the corrective action;
- the resolution result.

Exceptions never overwrite previous business events.

The complete transaction history must always remain available.

---



# Administrator Responsibilities

During exception handling the administrator may:

- suspend transaction progression;
- request additional customer information;
- repeat customer communication;
- manually confirm business events;
- cancel shipment creation;
- approve corrected transaction data;
- resume the Controlled Sales Process.

Every administrator action becomes part of the permanent business history.

---



# Recovery Strategy

The Controlled Sales Process always attempts to recover the transaction whenever possible.

Recovery has higher priority than cancellation.

Only when recovery becomes impossible may the transaction be cancelled according to business rules.

Whenever recovery succeeds, the transaction returns to the normal Controlled Sales Process.

---



# Exception Success Criteria

Exception Handling is considered successful when:

- every exception is detected;
- every exception is recorded;
- responsibility is assigned;
- corrective actions are documented;
- transaction history remains complete;
- business control is never lost.

---



# Business Roles & Responsibilities

## Purpose

Business Roles define the responsibilities of every participant involved in the Controlled Sales Process.

Each participant performs only the responsibilities


Each participant performs only the responsibilities assigned to their role.

This separation guarantees clear accountability throughout the entire transaction lifecycle.

---



# Business Participants

## Customer

The Customer initiates the transaction and interacts with the platform during the purchasing process.

Responsibilities:

- browse products;
- create orders;
- provide accurate customer information;
- complete delivery prepayment;
- receive the shipment;
- provide post-sale feedback.

The Customer never changes business data after transaction confirmation.

---

## Order Management System (OMS)

OMS coordinates the complete transaction lifecycle.

Responsibilities:

- validate customer orders;
- manage transaction states;
- register Business Events;
- coordinate delivery;
- coordinate financial confirmation;
- synchronize platform subsystems;
- archive completed transactions.

OMS is the operational core of the PRACTICULARIUM Platform.

---

## Email Delivery System (EMAIL-DS)

EMAIL-DS manages customer communication.

Responsibilities:

- send transactional emails;
- notify administrators;
- deliver shipment information;
- send review requests;
- provide post-sale communication.

EMAIL-DS never changes business data.

---

## Administrator

The Administrator supervises business operations.

Responsibilities:

- verify customer orders;
- approve transactions;
- confirm exceptional business events;
- supervise delivery preparation;
- resolve business exceptions;
- confirm revenue when automatic confirmation is unavailable.

The Administrator performs only those actions that cannot or should not be fully automated.

---

## Carrier

The Carrier performs transportation services.

Responsibilities:

- create shipments;
- transport shipments;
- provide shipment tracking;
- confirm delivery;
- transfer collected payments according to business rules.

Carrier information becomes Business Events after confirmation.

---

## Bank / Payment Provider

Financial institutions confirm money transfers.

Responsibilities:

- process customer payments;
- confirm business revenue;
- provide payment status when integration exists.

Financial confirmation completes the financial lifecycle.

---

## Analytics

Analytics collects operational business information.

Responsibilities:

- collect transaction statistics;
- calculate business indicators;
- provide management reports;
- support future business improvements.

Analytics never changes transaction history.

---




# Responsibility Principles

Each business responsibility belongs to exactly one participant.

Responsibilities never overlap without explicit business rules.

The Controlled Sales Process coordinates responsibilities but never duplicates them.

Business accountability remains transparent throughout the entire transaction lifecycle.

---




# Responsibility Success Criteria

Business Roles are considered correctly implemented when:

- every responsibility has one owner;
- responsibilities remain clearly separated;
- no participant performs conflicting actions;
- transaction accountability remains complete.

---



# Future Extensions

## Purpose

Future Extensions define the planned evolution of the Controlled Sales Process beyond the initial production release.

These extensions expand platform capabilities without modifying the approved business architecture.

Every future enhancement must remain compatible with the existing Controlled Sales Process.

---

# Evolution Philosophy

The Controlled Sales Process is designed as a long-term business model.

New functionality extends the platform rather than replacing existing business processes.

Every extension must increase business value while preserving architectural stability.

The business process always evolves through controlled improvements.

---

# Planned Business Extensions

## Product Expansion

Future versions of the platform may support:

- multiple products within one transaction;
- digital products;
- online educational courses;
- subscription services;
- gift certificates;
- downloadable materials.

---

## Customer Services

Future customer functionality may include:

- personal customer accounts;
- loyalty programs;
- wish lists;
- personalized recommendations;
- customer purchase history;
- customer profiles.

---

## Logistics

Future logistics improvements may include:

- multiple carriers;
- international shipping;
- warehouse management;
- automatic carrier selection;
- delivery optimization;
- shipment insurance management.

---

## Financial Services

Future financial functionality may include:

- payment gateways;
- online acquiring;
- installment payments;
- automatic invoice generation;
- automatic payment reconciliation;
- multi-currency support.

---

## Artificial Intelligence

Future AI functionality may include:

- AI Business Assistant;
- AI Customer Support;
- AI Sales Recommendations;
- AI Analytics;
- AI Delivery Optimization;
- AI Business Forecasting.

---

## Business Management

Future management functionality may include:

- CRM integration;
- ERP integration;
- advanced administration;
- business dashboards;
- KPI monitoring;
- strategic business reporting.

---

# Future Development Rules

Every future extension must:

- comply with PROJECT-RULES;
- comply with the Controlled Sales Process;
- preserve transaction integrity;
- preserve business history;
- maintain subsystem compatibility.

No extension may violate the approved business architecture.

---

# Long-Term Vision

The Controlled Sales Process is designed to become the operational business framework of the entire PRACTICULARIUM ecosystem.

Future products, services and business directions will extend this process instead of replacing it.

The Controlled Sales Process remains the foundation upon which every future business solution is built.

---







                                                                     # Glossary

## Purpose

The Glossary provides unified definitions for the key business and technical terms used throughout the PRACTICULARIUM Platform documentation.

Its purpose is to ensure that every participant in the project interprets the terminology consistently.

The definitions contained in this section apply to all official project documentation.

---

# Business Terms

| Term | Definition |
|------|--------------------------------------------------------------|
| Customer | A person who purchases products or services through the PRACTICULARIUM Platform. |
| Order | A customer's request to purchase one or more products. |
| Transaction | The complete business lifecycle from order creation to confirmed revenue and transaction closure. |
| Business Event | A confirmed business action that changes the state of a transaction. |
| Controlled Sales Process | The official business workflow governing every customer transaction. |
| Delivery | The logistics process from shipment creation to customer receipt. |
| Revenue | Business income officially confirmed as received on the FOP account. |
| Revenue Confirmation | The business event confirming that revenue has been received. |
| Financial Transaction | The financial lifecycle of a customer transaction. |
| Delivery Prepayment | Customer payment covering delivery expenses before shipment creation. |

---

# Platform Components

| Component | Definition |
|-----------|--------------------------------------------------------------|
| OMS | Order Management System responsible for coordinating business transactions. |
| EMAIL-DS | Email Delivery System responsible for transactional communication. |
| CSP | Controlled Sales Process defining the official business workflow. |
| Carrier Integration | Platform subsystem responsible for communication with shipping providers. |
| Analytics | Platform subsystem responsible for collecting business statistics and performance indicators. |

---

# Business Participants

| Participant | Definition |
|-------------|--------------------------------------------------------------|
| Customer | Initiates and
| Participant | Definition |
|-------------|--------------------------------------------------------------|
| Customer | Initiates and completes the purchasing process. |
| Administrator | Supervises business operations and manages exceptional situations. |
| Carrier | Organization responsible for transporting shipments and reporting delivery events. |
| Bank | Financial institution responsible for confirming receipt of business revenue. |
| Payment Provider | External service responsible for processing customer payments. |

---

# General Principles

The definitions contained in this Glossary represent the official terminology of the PRACTICULARIUM Platform.

Whenever a term is used throughout the project documentation, its meaning corresponds to the definition provided in this section.

Changes to business terminology shall be reflected simultaneously across all related project documentation.

---

# Related Documents

The Controlled Sales Process is closely integrated with the following project documentation.

| Document | Purpose |
|----------|------------------------------------------------------------|
| PROJECT-RULES.md | Defines project development principles and governance. |
| ROADMAP.md | Defines implementation priorities and development stages. |
| OMS-01.md | Defines the Order Management System architecture. |
| EMAIL-DS-01.md | Defines the Email Delivery System architecture. |

Together these documents form the official architectural foundation of the PRACTICULARIUM Platform.

---

# Change History

| Version | Date | Description |
|----------|------------|------------------------------------------------|
| 1.0 | 2026-07-02 | Initial Business Process Specification |

---

# Conclusion

The Controlled Sales Process (CSP-01) defines the official business model of the PRACTICULARIUM Platform.

It establishes a unified and controlled transaction lifecycle that coordinates customers, administrators, business systems, carriers, financial services and future platform integrations.

The Controlled Sales Process serves as the business foundation upon which the operational architecture of the platform is built.

All future functionality shall support, extend and comply with this business process.

Business processes always take precedence over technical implementation.

Technology may evolve.

Integrations may change.

Automation may increase.

However, the Controlled Sales Process remains the stable operational model governing every customer transaction.

---

**Approved for the PRACTICULARIUM Platform.**









# PRACTICULARIUM Platform

# CSP-01

# Controlled Sales Process

## Спецификация бизнес-процесса

**Версия:** 1.0

**Статус:** IN PROGRESS

**Последнее обновление:** 2026-07-02

---

# Назначение

Настоящий документ определяет официальный Контролируемый процесс продаж (Controlled Sales Process, CSP) платформы PRACTICULARIUM.

Контролируемый процесс продаж описывает полный жизненный цикл бизнес-сделки — от момента создания заказа покупателем до полного завершения сделки, включая подтверждение поступления денежных средств, контроль доставки и послепродажное взаимодействие с клиентом.

Документ CSP-01 является основной спецификацией бизнес-процессов платформы и определяет, каким образом должна выполняться каждая сделка.

---

# Область применения

Контролируемый процесс продаж охватывает все этапы бизнес-процесса, связанные с выполнением клиентских заказов, включая:

- взаимодействие с клиентом;
- оформление заказа;
- проверку заказа;
- подготовку отправления;
- управление доставкой;
- финансовый контроль;
- завершение сделки;
- взаимодействие с клиентом;
- послепродажное сопровождение;
- бизнес-аналитику.

---

# Миссия бизнес-процесса

Цель Контролируемого процесса продаж заключается не просто в продаже книг.

Его миссия — построить полностью контролируемую сделку, в которой каждое значимое бизнес-событие является видимым, отслеживаемым и управляемым.

Каждая клиентская сделка должна последовательно проходить путь от первого обращения клиента до подтвержденного поступления дохода на счет ФОП.

Платформа должна в любой момент времени знать:

- что произошло;
- когда это произошло;
- кто выполнил действие;
- каков текущий статус сделки;
- какое бизнес-событие должно произойти следующим.

---

# Архитектурная философия

Контролируемый процесс продаж координирует работу всех подсистем, участвующих в жизненном цикле сделки.

Он не заменяет OMS.

Он не заменяет EMAIL-DS.

Он не заменяет интеграции с перевозчиками.

Вместо этого CSP определяет порядок взаимодействия всех бизнес-подсистем во время выполнения каждой сделки.

Каждая подсистема выполняет только свои обязанности, а CSP определяет общий бизнес-процесс платформы.

---

# Основные принципы

---

## Принцип 1

### Клиент — центр процесса

Каждая сделка начинается с запроса клиента и заканчивается только после полного выполнения всех обязательств платформы перед покупателем.

---

## Принцип 2

### Контролируемые сделки

Каждая клиентская сделка должна находиться под бизнес-контролем с момента оформления заказа до подтверждения поступления дохода.

Ни одно значимое бизнес-событие не должно происходить вне платформы.

---

## Принцип 3

### Управление на основе событий

Сделка переходит к следующему этапу только после подтверждения соответствующего бизнес-события.

Именно бизнес-события определяют движение сделки по ее жизненному циклу.

---

## Принцип 4

### Финансовая защита

Отправка заказа начинается только после подтверждения получения обязательной предоплаты за доставку.

Платформа минимизрует финансовые риски до момента создания отправления.

---

## Принцип 5

### Прозрачность доставки

Каждое отправление должно оставаться полностью отслеживаемым на протяжении всего процесса доставки.

Платформа всегда должна знать текущий статус доставки.

---

## Принцип 6

### Подтверждение дохода

Сделка не считается финансово завершенной до момента подтверждения поступления денежных средств на счет ФОП.

Если автоматическое подтверждение недоступно, официальным бизнес-событием становится подтверждение администратора.

---

## Принцип 7

### Автоматизация прежде всего

Каждая повторяющаяся бизнес-операция должна быть автоматизирована, если это технически возможно и экономически оправдано.

Ручные действия сохраняются только там, где автоматизация невозможна или нецелесообразна.

---

## Принцип 8

### Независимость архитектуры

Бизнес-процесс не должен зависеть от конкретных банков, платежных систем или служб доставки.

Замена интеграций не должна требовать изменения Контролируемого процесса продаж.

---

# Участники бизнес-процесса

Контролируемый процесс продаж координирует взаимодействие всех участников сделки.

| Участник | Ответственность |
|-----------|-----------------------------------------------------------|
| Клиент | Оформляет заказ, выполняет оплату, получает книгу и оставляет отзыв |
| OMS | Управляет жизненным циклом сделки и бизнес-событиями |
| EMAIL-DS | Обеспечивает электронное взаимодействие с клиентами и администраторами |
| Администратор | Контролирует выполнение сделки и подтверждает исключительные события |
| Перевозчик | Выполняет доставку и сообщает о событиях доставки |
| Платежная система | Обрабатывает предоплату доставки (текущая или будущая реализация) |
| Банк | Подтверждает поступление денежных средств на счет ФОП |
| Аналитика | Собирает бизнес-показатели после завершения сделки |

---

# Бизнес-подсистемы

Контролируемый процесс продаж объединяет несколько независимых подсистем платформы.

```text
Веб-сайт

↓

OMS

↓

EMAIL-DS

↓

Интеграция с перевозчиком

↓

Обработка платежей

↓

Подтверждение банком

↓

Бизнес-аналитика
```

Каждая подсистема выполняет собственную функцию, участвуя в едином Контролируемом процессе продаж.

---

# Контролируемый жизненный цикл сделки

## Назначение

Контролируемый жизненный цикл сделки определяет полный бизнес-процесс платформы PRACTICULARIUM.

Он описывает каждое значимое бизнес-событие — от момента оформления заказа клиентом до полного завершения сделки, включая подтверждение поступления денежных средств и послепродажное взаимодействие.

Контролируемый жизненный цикл является операционной основой всей платформы.

---

# Жизненный цикл бизнес-процесса

Каждая сделка проходит заранее определенную последовательность бизнес-событий.

Каждое событие имеет:

- одного ответственного участника;
- один ожидаемый бизнес-результат;
- одно последующее бизнес-событие.

Сделка никогда не пропускает этапы своего жизненного цикла.

---

# Контролируемый процесс продаж

| № | Бизнес-событие | Описание | Ответственный | Текущий статус | Автоматизация |
|---:|--------------------------------------|------------------------------------------------|----------------|----------------|------------------------------|
| **1** | Клиент открывает сайт | Ознакомление с платформой и книгами | Клиент | ✅ | Не требуется |
| ↓ |
| **2** | Оформление заказа | Клиент заполняет форму заказа | Клиент | ✅ | Полностью автоматизировано |
| ↓ |
| **3** | Проверка заказа | OMS проверяет корректность данных | OMS | ✅ | Полностью автоматизировано |
| ↓ |
| **4** | Создание сделки | OMS создает официальную запись сделки | OMS | ✅ | Полностью автоматизировано |
| ↓ |
| **5** | Сохранение сделки | Сделка сохраняется в базе данных Supabase | OMS | ✅ | Полностью автоматизировано |
| ↓ |
| **6** | Уведомление клиента | EMAIL-DS отправляет подтверждение заказа | EMAIL-DS | ✅ | Полностью автоматизировано |
| ↓ |
| **7** | Уведомление администратора | EMAIL-DS сообщает о новом заказе | EMAIL-DS | ✅ | Полностью автоматизировано |
| ↓ |
| **8** | Проверка заказа администратором | Проверка данных клиента | Администратор | ⏳ | Ручное выполнение |
| ↓ |
| **9** | Подтверждение заказа | Администратор подтверждает выполнение сделки | Администратор | ⏳ | OMS оказывает поддержку |
| ↓ |
| **10** | Расчет стоимости доставки | OMS рассчитывает стоимость доставки | OMS | ❌ | Через API перевозчика |
| ↓ |
| **11** | Формирование запроса на предоплату | OMS подготавливает запрос на предоплату доставки | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **12** | Настройка параметров оплаты | Администратор выбирает счет для получения предоплаты по данной сделке (карта физического лица или счет ФОП) | Администратор | ❌ | Полуавтоматизировано |
| ↓ |
| **13** | Отправка запроса на предоплату | EMAIL-DS отправляет клиенту инструкции по оплате доставки | EMAIL-DS | ❌ | Полностью автоматизировано |
| ↓ |
| **14** | Получение предоплаты | Клиент оплачивает стоимость доставки | Клиент | ❌ | Внешняя платежная система |
| ↓ |
| **15** | Подтверждение предоплаты | OMS подтверждает получение предоплаты | OMS / Администратор | ❌ | Полуавтоматизировано → в будущем полностью автоматически |
| ↓ |
| **16** | Создание ТТН | OMS создает транспортную накладную через API перевозчика | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **17** | Получение номера ТТН | OMS сохраняет номер отправления | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **18** | Получение документов на отправку | OMS получает готовые документы для печати | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **19** | Упаковка заказа | Книга упаковывается для отправки | Администратор | ⏳ | Ручное выполнение |
| ↓ |
| **20** | Передача отправления перевозчику | Посылка передается в службу доставки | Администратор | ⏳ | Ручное выполнение |
| ↓ |
| **21** | Подтверждение приема отправления | OMS получает подтверждение от перевозчика | OMS | ❌ | Через API перевозчика |
| ↓ |
| **22** | Отправка клиенту информации для отслеживания | EMAIL-DS сообщает номер ТТН и данные отслеживания | EMAIL-DS | ❌ | Полностью автоматизировано |
| ↓ |
| **23** | Контроль доставки | OMS отслеживает статус отправления | OMS | ❌ | Через API перевозчика |
| ↓ |
| **24** | Прибытие отправления | Перевозчик сообщает о прибытии заказа | API перевозчика | ❌ | Полностью автоматизировано |
| ↓ |
| **25** | Получение заказа клиентом | Перевозчик подтверждает вручение отправления | API перевозчика | ❌ | Полностью автоматизировано |
| ↓ |
| **26** | Завершение доставки | OMS завершает процесс доставки | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **27** | Ожидание подтверждения поступления дохода | OMS ожидает подтверждения поступления денежных средств на счет ФОП | OMS | ❌ | Автоматически / вручную |
| ↓ |
| **28** | Подтверждение поступления дохода | Банк через API или администратор подтверждает поступление средств | Банк / OMS / Администратор | ❌ | Полуавтоматизировано |
| ↓ |
| **29** | Завершение финансовой операции | OMS завершает финансовый цикл сделки | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **30** | Закрытие сделки | OMS официально завершает сделку | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **31** | Благодарственное письмо | EMAIL-DS отправляет благодарность клиенту | EMAIL-DS | ❌ | Полностью автоматизировано |
| ↓ |
| **32** | Запрос отзыва | EMAIL-DS предлагает оставить отзыв | EMAIL-DS | ❌ | Полностью автоматизировано |
| ↓ |
| **33** | Персональные рекомендации | Платформа рекомендует другие книги и продукты | EMAIL-DS | ❌ | Полностью автоматизировано |
| ↓ |
| **34** | Архивирование сделки | OMS переводит сделку в архив | OMS | ❌ | Полностью автоматизировано |
| ↓ |
| **35** | Обновление бизнес-аналитики | OMS обновляет статистику и показатели платформы | OMS | ❌ | Полностью автоматизировано |

---

# Правила жизненного цикла сделки

Каждая сделка проходит только один жизненный цикл.

Каждое бизнес-событие может произойти только после успешного завершения предыдущего этапа.

Каждое бизнес-событие обязательно фиксируется в системе.

Ни один этап не может быть пропущен без явного подтверждения администратора.

После завершения сделки вся информация становится частью постоянной бизнес-истории платформы.

---

# Критерии успешного завершения сделки

Контролируемый процесс продаж считается успешно завершенным только в том случае, если:

- заказ полностью выполнен;
- доставка успешно завершена;
- поступление дохода подтверждено;
- сделка официально закрыта;
- выполнено послепродажное взаимодействие с клиентом;
- бизнес-аналитика обновлена.

Только после выполнения всех перечисленных условий сделка считается полностью завершенной.

---

# Бизнес-события

## Назначение

Бизнес-события определяют все значимые события, изменяющие состояние клиентской сделки.

Контролируемый процесс продаж полностью основан на бизнес-событиях.

Сделка переходит к следующему этапу только после успешного завершения и подтверждения очередного бизнес-события.

Именно бизнес-события синхронизируют работу всех подсистем, участвующих в жизненном цикле сделки.

---

# Принципы бизнес-событий

Каждое бизнес-событие должно соответствовать следующим требованиям.

- Представлять завершенное бизнес-действие.
- Изменять состояние сделки.
- Постоянно храниться в системе.
- Иметь одного ответственного участника.
- Запускать следующее бизнес-событие.
- При необходимости инициировать уведомления.
- При необходимости запускать автоматические процессы.

Бизнес-события не могут происходить вне платформы.

---

# Бизнес-события

| № | Бизнес-событие | Причина возникновения | Ответственный | Следующее событие |
|---:|--------------------------------------|----------------------------------------|----------------|----------------------------------------|
| 1 | Заказ оформлен | Клиент отправил форму заказа | Клиент | Проверка заказа |
| 2 | Заказ проверен | OMS проверила данные клиента | OMS | Подтверждение заказа |
| 3 | Заказ подтвержден | Администратор подтвердил сделку | Администратор | Расчет стоимости доставки |
| 4 | Стоимость доставки рассчитана | OMS получила стоимость доставки | OMS | Формирование запроса на предоплату |
| 5 | Запрос на предоплату отправлен | EMAIL-DS направила инструкции клиенту | EMAIL-DS | Получение предоплаты |
| 6 | Предоплата подтверждена | Подтверждено поступление предоплаты | OMS / Администратор | Создание ТТН |
| 7 | ТТН создана | Перевозчик принял заявку | OMS | Подготовка отправления |
| 8 | Отправление передано перевозчику | Посылка передана службе доставки | Администратор | Контроль доставки |
| 9 | Заказ получен клиентом | Перевозчик подтвердил вручение | Перевозчик | Подтверждение поступления дохода |
| 10 | Доход подтвержден | Банк или администратор подтвердили поступление средств | Банк / Администратор | Закрытие сделки |
| 11 | Сделка закрыта | OMS завершила сделку | OMS | Послепродажное взаимодействие |
| 12 | Послепродажное взаимодействие завершено | EMAIL-DS завершила коммуникацию | EMAIL-DS | Обновление аналитики |
| 13 | Аналитика обновлена | OMS обновила бизнес-показатели | OMS | Архивирование сделки |

---

# Категории бизнес-событий

Бизнес-события объединяются в независимые группы.

### События клиента

- оформление заказа;
- внесение предоплаты за доставку;
- получение отправления;
- оставление отзыва.

---

### События OMS

- создание сделки;
- проверка заказа;
- закрытие сделки;
- обновление аналитики.

---

### События администратора

- подтверждение заказа;
- подтверждение поступления дохода;
- выполнение ручных операций;
- обработка исключительных ситуаций.

---

### События перевозчика

- создание ТТН;
- принятие отправления;
- доставка отправления;
- подтверждение вручения.

---

### Финансовые события

- подтверждение предоплаты доставки;
- подтверждение поступления дохода.

---

### Коммуникационные события

- уведомление клиента;
- уведомление администратора;
- благодарственное письмо;
- запрос отзыва.

---

# Правила бизнес-событий

Бизнес-события являются неизменяемыми.

После регистрации событие никогда не удаляется.

Каждое событие навсегда остается привязанным к своей сделке.

Для каждого события обязательно сохраняются:

- дата и время;
- ответственный участник;
- идентификатор сделки;
- категория события;
- результат выполнения;
- дополнительные комментарии (при необходимости).

---

# Финансовый контроль

## Назначение

Финансовый контроль гарантирует, что каждая клиентская сделка остается финансово защищенной на протяжении всего Контролируемого процесса продаж.

Финансовый контроль разделяет расходы на доставку и доходы бизнеса.

Такое разделение позволяет минимизировать финансовые риски и одновременно сохранять полную прозрачность каждой сделки.

---

# Финансовая философия

Контролируемый процесс продаж разделяет финансовую часть сделки на два независимых этапа.

Первый этап обеспечивает финансовую защиту отправления.

Второй этап подтверждает поступление дохода от сделки.

С финансовой точки зрения сделка считается завершенной только после подтверждения поступления денежных средств на счет ФОП.

---

# Финансовый жизненный цикл

```text
Стоимость доставки рассчитана

↓

Запрос на предоплату сформирован

↓

Предоплата подтверждена

↓

Создана ТТН

↓

Заказ доставлен

↓

Ожидание подтверждения дохода

↓

Доход подтвержден

↓

Финансовая операция завершена
```

---

# Правила финансового контроля

Создание отправления запрещено до подтверждения получения предоплаты за доставку.

Подтверждение поступления дохода является официальным событием завершения финансовой части сделки.

Подтверждение может поступить:

- автоматически через API банка;
- вручную администратором.

Независимо от способа подтверждения бизнес-процесс остается одинаковым.

---

# Подтверждение поступления дохода

Подтверждение поступления дохода является одним из важнейших бизнес-событий всей платформы.

OMS никогда не предполагает, что денежные средства уже поступили.

Доход считается полученным только после официального подтверждения.

Такой подход позволяет в будущем интегрировать банковские API без изменения архитектуры Контролируемого процесса продаж.

---

# Критерии успешного финансового контроля

Финансовый контроль считается успешно завершенным, если:

- финансовые риски доставки устранены;
- отправление успешно доставлено;
- поступление дохода подтверждено;
- финансовая операция официально завершена;
- финансовая история сделки полностью сохранена.

---

# Управление доставкой

## Назначение

Управление доставкой определяет порядок контроля каждого отправления после подтверждения заказа.

Его задача — обеспечить полную прозрачность, отслеживаемость и управляемость доставки до момента получения книги клиентом.

Управление доставкой отвечает исключительно за логистику.

Финансовые операции регулируются отдельным разделом финансового контроля.

---

# Философия управления доставкой

Платформа никогда не должна терять контроль над отправлением.

Для каждого отправления в любой момент времени должен быть известен его текущий статус.

Любое изменение статуса доставки становится новым бизнес-событием, которое регистрируется в OMS.

Если доступна интеграция с API перевозчика, информация поступает автоматически.

Если автоматическая интеграция отсутствует, соответствующее бизнес-событие фиксирует администратор.

При этом сам Контролируемый процесс продаж остается неизменным.

Меняется только источник информации.

---

# Жизненный цикл доставки

```text
Заказ подтвержден

↓

Стоимость доставки рассчитана

↓

Предоплата подтверждена

↓

Создана ТТН

↓

Заказ упакован

↓

Отправление передано перевозчику

↓

Перевозчик принял отправление

↓

Отправление в пути

↓

Отправление прибыло

↓

Клиент получил заказ

↓

Доставка завершена
```

---

# События доставки

| № | Событие доставки | Причина возникновения | Ответственный | Автоматизация |
|---:|------------------------------------|--------------------------------------|----------------|-------------------------|
| 1 | Стоимость доставки рассчитана | OMS завершила расчет стоимости | OMS | Автоматически |
| 2 | Предоплата подтверждена | Получено подтверждение оплаты | OMS / Администратор | Полуавтоматически |
| 3 | Создана ТТН | API перевозчика оформил отправление | OMS | Автоматически |
| 4 | Заказ упакован | Подготовлена книга к отправке | Администратор | Вручную |
| 5 | Отправление передано перевозчику | Посылка передана перевозчику | Администратор | Вручную |
| 6 | Отправление принято | Перевозчик подтвердил прием | API перевозчика | Автоматически |
| 7 | Отправление в пути | Перевозчик обновил статус | API перевозчика | Автоматически |
| 8 | Отправление прибыло | Заказ прибыл в пункт выдачи | API перевозчика | Автоматически |
| 9 | Заказ получен | Клиент получил книгу | API перевозчика | Автоматически |
| 10 | Доставка завершена | OMS завершила цикл доставки | OMS | Автоматически |

---

# Правила управления доставкой

Создание отправления допускается только после подтверждения предоплаты доставки.

Для каждого отправления система должна хранить:

- идентификатор отправления;
- перевозчика;
- номер ТТН;
- текущий статус;
- полную историю доставки.

OMS никогда не предполагает, что доставка завершена.

Доставка считается завершенной только после официального подтверждения перевозчиком либо администратором.

---

# Мониторинг доставки

OMS постоянно отслеживает состояние каждого отправления.

При изменении статуса доставки система выполняет следующие действия:

- регистрирует новое бизнес-событие;
- обновляет историю сделки;
- при необходимости отправляет уведомления;
- открывает возможность перехода к следующему этапу Контролируемого процесса продаж.

Мониторинг продолжается до официального подтверждения завершения доставки.

---

# Критерии успешного управления доставкой

Управление доставкой считается успешным, если:

- каждое отправление успешно доставлено;
- все этапы доставки зарегистрированы;
- история доставки полностью сохранена;
- OMS в любой момент времени знает актуальный статус отправления.

---

# Взаимодействие с клиентом

## Назначение

Взаимодействие с клиентом определяет порядок коммуникации между платформой PRACTICULARIUM и покупателем на протяжении всего Контролируемого процесса продаж.

Цель коммуникации — информировать клиента, сопровождать выполнение сделки и укреплять доверие к платформе.

Коммуникация не управляет бизнес-процессами.

Она отражает только подтвержденные бизнес-события, зарегистрированные OMS.

---

# Философия взаимодействия

Клиент в любой момент времени должен понимать:

- что уже произошло;
- что происходит сейчас;
- что произойдет дальше.

Качественная коммуникация снижает неопределенность.

Понятная коммуникация формирует доверие.

Доверие становится основой долгосрочных отношений с клиентами.

---

# Жизненный цикл взаимодействия

```text
Заказ оформлен

↓

Заказ подтвержден

↓

Запрос на предоплату отправлен

↓

Предоплата подтверждена

↓

Создана ТТН

↓

Заказ отправлен

↓

Заказ получен

↓

Доход подтвержден

↓

Благодарственное письмо

↓

Запрос отзыва

↓

Персональные рекомендации
```

---

# Правила взаимодействия

Каждое сообщение отправляется только после подтверждения соответствующего бизнес-события.

Клиент не должен получать одинаковые транзакционные сообщения повторно, если это специально не инициировал администратор.

Каждое отправленное сообщение сохраняется в истории сделки.

Все сообщения формируются на основе шаблонов EMAIL-DS.

Коммуникация остается многоязычной.

Язык каждого сообщения автоматически определяется выбранным языком платформы.

---

# Каналы взаимодействия

### Текущие каналы

- Электронная почта (Email)

---

### Планируемые каналы

- SMS
- Telegram
- WhatsApp
- Push-уведомления
- Мобильное приложение

---

# Критерии успешного взаимодействия

Взаимодействие с клиентом считается успешным, если:

- каждое бизнес-событие сопровождается правильным сообщением;
- клиент остается информированным на протяжении всей сделки;
- история коммуникации полностью сохраняется;
- доверие клиента поддерживается на каждом этапе Контролируемого процесса продаж.

---

# Точки автоматизации

## Назначение

Точки автоматизации определяют этапы Контролируемого процесса продаж, на которых ручные операции могут быть заменены автоматизированными механизмами платформы.

Цель автоматизации заключается не в замене человека.

Ее задача — повысить надежность процессов, сократить объем повторяющейся работы и усилить контроль над каждой сделкой.

Автоматизация внедряется постепенно, не изменяя утвержденную бизнес-архитектуру.

---

# Философия автоматизации

Контролируемый процесс продаж является постоянной бизнес-моделью платформы.

Автоматизация — это лишь способ реализации этой модели.

Внедрение автоматизации никогда не изменяет бизнес-правила.

Она лишь заменяет повторяющиеся ручные операции автоматическим выполнением.

Именно этот принцип обеспечивает долгосрочную устойчивость архитектуры платформы.

---

# Уровни автоматизации

Платформа PRACTICULARIUM использует четыре уровня автоматизации.

| Уровень | Описание |
|----------|--------------------------------------------------------------|
| Ручной | Действие полностью выполняется человеком. |
| С поддержкой OMS | OMS помогает администратору, но окончательное решение принимает человек. |
| Полуавтоматический | OMS выполняет часть процесса, ожидая подтверждения внешней системы или администратора. |
| Полностью автоматический | OMS самостоятельно выполняет процесс после получения необходимого бизнес-события. |

---

# Текущее состояние автоматизации

| Бизнес-процесс | Текущее состояние | Целевое состояние |
|--------------------------------------------|-------------------------|------------------------------|
| Оформление заказа | Полностью автоматизировано | Полностью автоматизировано |
| Проверка заказа | Полностью автоматизировано | Полностью автоматизировано |
| Подтверждение заказа | С поддержкой OMS | С поддержкой OMS |
| Расчет стоимости доставки | Выполняется вручную | Полностью автоматизировано |
| Предоплата доставки | Выполняется вручную | Полуавтоматизировано |
| Создание ТТН | Выполняется вручную | Полностью автоматизировано |
| Контроль доставки | Выполняется вручную | Полностью автоматизировано |
| Подтверждение поступления дохода | Выполняется вручную | Полуавтоматизировано |
| Коммуникация с клиентом | Полностью автоматизировано | Полностью автоматизировано |
| Бизнес-аналитика | Полуавтоматизировано | Полностью автоматизировано |

---

# Принципы автоматизации

Автоматизация внедряется только тогда, когда она приносит измеримую бизнес-пользу.

Автоматизация никогда не должна снижать прозрачность бизнес-процессов.

Каждое автоматическое действие должно быть полностью отслеживаемым.

Каждое автоматическое решение должно иметь возможность ручного подтверждения или корректировки, если этого требуют бизнес-правила.

OMS всегда фиксирует, каким способом выполнено действие:

- вручную;
- полуавтоматически;
- автоматически.

---

# Критерии успешной автоматизации

Автоматизация считается успешной, если:

- уменьшается объем повторяющихся операций;
- повышается надежность процессов;
- возрастает прозрачность управления сделками;
- снижается нагрузка на администратора;
- Контролируемый процесс продаж остается неизменным.

---

# Обработка исключительных ситуаций

## Назначение

Раздел обработки исключительных ситуаций определяет порядок действий платформы PRACTICULARIUM в случаях, когда выполнение Контролируемого процесса продаж отклоняется от стандартного сценария.

Цель обработки исключительных ситуаций заключается не в предотвращении всех возможных отклонений.

Ее задача — обеспечить сохранение контроля над сделкой, прозрачность происходящих событий и возможность успешного завершения бизнес-процесса.

Возникновение исключительной ситуации не означает прекращение сделки.

Оно означает переход сделки на альтернативный контролируемый сценарий выполнения.

---

# Философия обработки исключительных ситуаций

Любое отклонение рассматривается как обычное бизнес-событие.

Каждая исключительная ситуация должна:

- быть зарегистрирована;
- иметь установленную причину;
- иметь назначенного ответственного;
- иметь определенный порядок устранения;
- полностью сохраняться в истории сделки.

Ни одна исключительная ситуация не должна приводить к потере контроля над бизнес-процессом.

---

# Категории исключительных ситуаций

### Исключительные ситуации клиента

- указаны некорректные данные;
- не выполнена предоплата доставки;
- клиент запросил отмену заказа;
- клиент запросил изменение заказа;
- клиент не получил отправление.

---

### Финансовые исключительные ситуации

- предоплата не поступила;
- не удалось подтвердить оплату;
- обнаружено расхождение в сумме платежа;
- отсутствует подтверждение поступления дохода.

---

### Исключительные ситуации доставки

- не удалось создать ТТН;
- перевозчик отклонил отправление;
- доставка задерживается;
- отправление возвращено;
- отправление потеряно;
- отправление повреждено.

---

### Коммуникационные исключительные ситуации

- письмо не доставлено;
- почтовый ящик клиента недоступен;
- сообщение отклонено;
- повторная доставка сообщения завершилась ошибкой.

---

### Технические исключительные ситуации

- недоступна OMS;
- недоступна база данных;
- недоступен API перевозчика;
- недоступна платежная система;
- отсутствует сетевое соединение.

---

# Модель обработки исключительной ситуации

```text
Обнаружение исключительной ситуации

↓

Регистрация нового бизнес-события

↓

Назначение ответственного

↓

Анализ ситуации

↓

Выполнение корректирующих действий

↓

Подтверждение устранения проблемы

↓

Регистрация результата

↓

Возврат к Контролируемому процессу продаж
```

---

# Правила обработки исключительных ситуаций

Каждая исключительная ситуация обязательно регистрируется.

Для каждой ситуации сохраняются:

- дата и время возникновения;
- причина;
- ответственный участник;
- выполненные действия;
- результат устранения.

Исключительные ситуации никогда не удаляют ранее зарегистрированные бизнес-события.

Полная история сделки всегда остается неизменной.

---

# Полномочия администратора

Во время обработки исключительных ситуаций администратор имеет право:

- приостановить выполнение сделки;
- запросить дополнительную информацию;
- повторно отправить клиенту уведомления;
- вручную подтвердить отдельные бизнес-события;
- отменить создание отправления;
- скорректировать данные сделки;
- возобновить выполнение Контролируемого процесса продаж.

Все действия администратора становятся частью постоянной истории сделки.

---

# Стратегия восстановления

Основной задачей платформы является восстановление выполнения сделки.

Восстановление имеет более высокий приоритет, чем отмена сделки.

Отмена допускается только тогда, когда восстановление выполнения бизнес-процесса становится невозможным.

После успешного устранения исключительной ситуации сделка возвращается в обычный Контролируемый процесс продаж.

---

# Критерии успешной обработки исключительных ситуаций

Обработка исключительных ситуаций считается успешной, если:

- все отклонения своевременно обнаружены;
- каждое исключение зарегистрировано;
- назначен ответственный участник;
- выполнены корректирующие действия;
- полностью сохранена история сделки;
- контроль над бизнес-процессом не утрачен.

---

# Роли и зоны ответственности

## Назначение

Настоящий раздел определяет роли всех участников Контролируемого процесса продаж и закрепляет ответственность каждого участника за выполнение своих функций.

Четкое разделение ответственности обеспечивает прозрачность управления сделками, исключает дублирование функций и упрощает развитие платформы.

Каждый участник выполняет только те действия, которые относятся к его компетенции.

---

# Участники бизнес-процесса

## Клиент

Клиент инициирует сделку и взаимодействует с платформой на протяжении всего процесса покупки.

### Основные обязанности

- ознакомление с продукцией;
- оформление заказа;
- предоставление корректных контактных данных;
- внесение предоплаты за доставку;
- получение отправления;
- оставление отзыва после получения книги.

После подтверждения заказа клиент не изменяет бизнес-данные сделки напрямую.

Все изменения выполняются через администратора.

---

## OMS (Order Management System)

OMS управляет полным жизненным циклом сделки.

### Основные обязанности

- проверка заказов;
- управление статусами сделки;
- регистрация бизнес-событий;
- управление логистическими процессами;
- управление финансовыми этапами сделки;
- координация взаимодействия подсистем;
- архивирование завершенных сделок.

OMS является операционным ядром платформы PRACTICULARIUM.

---

## EMAIL-DS (Email Delivery System)

EMAIL-DS отвечает за электронное взаимодействие платформы с клиентами и администраторами.

### Основные обязанности

- отправка транзакционных писем;
- уведомление администратора;
- информирование о доставке;
- отправка благодарственных писем;
- запрос отзывов;
- сопровождение клиента после завершения сделки.

EMAIL-DS никогда не изменяет бизнес-данные сделки.

Он только информирует участников процесса.

---

## Администратор

Администратор контролирует выполнение Контролируемого процесса продаж.

### Основные обязанности

- проверка заказов;
- подтверждение сделок;
- обработка исключительных ситуаций;
- подготовка отправлений;
- контроль нестандартных операций;
- подтверждение поступления дохода при отсутствии автоматической интеграции с банком.

Администратор выполняет только те действия, которые невозможно или нецелесообразно полностью автоматизировать.

---

## Перевозчик

Перевозчик отвечает за физическую доставку отправлений.

### Основные обязанности

- создание отправления;
- перевозка заказа;
- предоставление информации для отслеживания;
- подтверждение доставки;
- перечисление денежных средств в соответствии с правилами выбранной схемы доставки.

После подтверждения соответствующие события становятся бизнес-событиями платформы.

---

## Банк / Платежная система

Финансовые организации обеспечивают обработку денежных операций.

### Основные обязанности

- обработка платежей;
- подтверждение поступления денежных средств;
- предоставление статуса платежей при наличии интеграции.

Именно подтверждение банка завершает финансовый жизненный цикл сделки.

---

## Система аналитики

Система аналитики собирает информацию о работе платформы.

### Основные обязанности

- сбор статистики по сделкам;
- расчет бизнес-показателей;
- подготовка аналитических отчетов;
- поддержка принятия управленческих решений.

Система аналитики никогда не изменяет историю сделок.

Она только использует накопленные данные.

---

# Принципы распределения ответственности

Каждая бизнес-функция имеет одного ответственного исполнителя.

Ответственность не должна пересекаться между участниками без явного определения в бизнес-правилах.

Контролируемый процесс продаж координирует взаимодействие участников, но не дублирует их обязанности.

Каждый участник отвечает только за свою область ответственности.

---

# Критерии корректного распределения ответственности

Распределение ответственности считается корректным, если:

- у каждой функции есть единственный ответственный;
- обязанности участников не пересекаются;
- отсутствуют конфликтующие полномочия;
- сохраняется полная прозрачность выполнения сделки.

---

# Стратегия развития

## Назначение

Настоящий раздел определяет направления дальнейшего развития Контролируемого процесса продаж после запуска первой рабочей версии платформы.

Все будущие улучшения должны расширять существующую архитектуру, не изменяя утвержденную бизнес-модель.

Контролируемый процесс продаж является долгосрочной основой развития платформы.

---

# Философия развития

Контролируемый процесс продаж проектируется как стабильная бизнес-модель.

Развитие платформы осуществляется путем добавления новых возможностей, а не путем изменения существующих бизнес-процессов.

Каждое новое решение должно повышать ценность платформы, сохраняя архитектурную стабильность.

Развитие всегда происходит через последовательные контролируемые улучшения.

---

# Планируемое развитие платформы

## Расширение ассортимента

В будущих версиях платформы предусматривается поддержка:

- нескольких товаров в одном заказе;
- цифровых продуктов;
- онлайн-курсов;
- подписок;
- подарочных сертификатов;
- электронных материалов для скачивания.

---

## Развитие клиентских сервисов

Планируется реализация:

- личного кабинета клиента;
- программы лояльности;
- списка желаний;
- персональных рекомендаций;
- истории покупок;
- профиля клиента.

---

## Развитие логистики

Планируется поддержка:

- нескольких перевозчиков;
- международной доставки;
- управления складами;
- автоматического выбора перевозчика;
- оптимизации доставки;
- управления страхованием отправлений.

---

## Развитие финансовых сервисов

В перспективе предусматривается:

- интеграция платежных шлюзов;
- интернет-эквайринг;
- оплата частями;
- автоматическое формирование счетов;
- автоматическая сверка поступлений;
- поддержка нескольких валют.

---

## Искусственный интеллект

В дальнейшем платформа может включать:

- AI-помощника администратора;
- AI-консультанта для клиентов;
- AI-рекомендации по продажам;
- AI-аналитику;
- AI-оптимизацию логистики;
- AI-прогнозирование развития бизнеса.

---

## Управление бизнесом

В будущих версиях предусматривается:

- интеграция CRM;
- интеграция ERP;
- расширенная административная панель;
- панели мониторинга (Dashboard);
- контроль ключевых показателей (KPI);
- стратегическая бизнес-аналитика.

---

# Правила дальнейшего развития

Каждое новое расширение должно:

- соответствовать PROJECT-RULES;
- соответствовать Контролируемому процессу продаж;
- сохранять целостность сделок;
- сохранять историю бизнес-событий;
- быть совместимым с существующей архитектурой.

Ни одно расширение не должно нарушать утвержденную бизнес-модель платформы.

---

# Долгосрочное видение

Контролируемый процесс продаж рассматривается как единая операционная модель всей экосистемы PRACTICULARIUM.

Все будущие продукты, сервисы и направления развития будут расширять данную модель, а не заменять ее.

Именно Контролируемый процесс продаж остается фундаментом, на котором строится дальнейшее развитие платформы.

---

# Словарь терминов

## Назначение

Настоящий словарь содержит официальные определения основных бизнес- и технических терминов, используемых в документации платформы PRACTICULARIUM.

Его задача — обеспечить единое понимание терминологии всеми участниками проекта.

Все определения, приведенные в настоящем разделе, являются официальными для всей проектной документации.

---

# Основные бизнес-термины

| Термин | Определение |
|----------|------------------------------------------------------------------|
| Клиент | Пользователь платформы, приобретающий товары или услуги PRACTICULARIUM. |
| Заказ | Запрос клиента на приобретение одного или нескольких товаров. |
| Сделка | Полный жизненный цикл выполнения заказа — от оформления до окончательного завершения. |
| Бизнес-событие | Подтвержденное действие, изменяющее состояние сделки. |
| Контролируемый процесс продаж | Официальная бизнес-модель выполнения всех сделок платформы PRACTICULARIUM. |
| Доставка | Логистический процесс от создания отправления до получения заказа клиентом. |
| Доход | Денежные средства, подтвержденные как поступившие на счет ФОП. |
| Подтверждение дохода | Бизнес-событие, фиксирующее официальное поступление денежных средств. |
| Финансовая операция | Финансовый жизненный цикл конкретной сделки. |
| Предоплата доставки | Денежные средства, оплачиваемые клиентом до создания отправления для покрытия расходов на доставку. |

---

# Компоненты платформы

| Компонент | Определение |
|------------|----------------------------------------------------------------|
| OMS | Система управления заказами и сделками (Order Management System). |
| EMAIL-DS | Система электронной коммуникации (Email Delivery System). |
| CSP | Контролируемый процесс продаж (Controlled Sales Process). |
| Интеграция с перевозчиком | Подсистема взаимодействия платформы со службами доставки. |
| Система аналитики | Подсистема формирования статистики и бизнес-показателей платформы. |

---

# Участники бизнес-процесса

| Участник | Определение |
|------------|----------------------------------------------------------------|
| Клиент | Инициирует и завершает процесс покупки. |
| Администратор | Контролирует выполнение бизнес-процессов и обрабатывает исключительные ситуации. |
| Перевозчик | Выполняет транспортировку отправлений и сообщает о событиях доставки. |
| Банк | Подтверждает поступление денежных средств на счет ФОП. |
| Платежная система | Обрабатывает платежные операции клиента. |

---

# Общие положения

Все определения настоящего словаря являются официальной терминологией платформы PRACTICULARIUM.

При использовании терминов в других документах проекта подразумеваются именно определения, приведенные в данном разделе.

Любое изменение терминологии должно одновременно отражаться во всей официальной документации проекта.

---

# Связанные документы

Контролируемый процесс продаж тесно связан со следующими документами проекта.

| Документ | Назначение |
|-----------|-------------------------------------------------------------|
| PROJECT-RULES.md | Определяет правила разработки и управления проектом. |
| ROADMAP.md | Определяет этапы и приоритеты развития платформы. |
| OMS-01.md | Определяет архитектуру системы управления сделками. |
| EMAIL-DS-01.md | Определяет архитектуру системы электронной коммуникации. |

Совокупность этих документов образует единую архитектурную основу платформы PRACTICULARIUM.

---

# История изменений

| Версия | Дата | Описание |
|----------|------------|----------------------------------------------|
| 1.0 | 2026-07-02 | Первая утвержденная редакция спецификации бизнес-процессов |

---

# Заключение

Контролируемый процесс продаж (CSP-01) определяет официальную бизнес-модель платформы PRACTICULARIUM.

Документ описывает единый управляемый жизненный цикл сделки, объединяющий клиентов, администратора, бизнес-подсистемы платформы, службы доставки, финансовые организации и будущие интеграции.

Контролируемый процесс продаж является фундаментом операционной архитектуры платформы.

Все последующие функции, сервисы и интеграции должны расширять данную модель, сохраняя ее целостность и соответствуя утвержденным бизнес-правилам.

Бизнес-процессы всегда имеют приоритет над технической реализацией.

Технологии могут изменяться.

Интеграции могут совершенствоваться.

Уровень автоматизации будет расти.

Однако Контролируемый процесс продаж остается неизменной основой, определяющей выполнение каждой сделки на платформе PRACTICULARIUM.

---

**Утверждено для платформы PRACTICULARIUM.**