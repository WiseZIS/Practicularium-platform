/**
 * PRACTICULARIUM Platform 2.0
 * Order Status Dictionary
 * Single Source of Truth
 */

export const ORDER_STATUS = Object.freeze({
    NEW: "NEW",
    CONFIRMED: "CONFIRMED",
    PAID: "PAID",
    PROCESSING: "PROCESSING",
    SHIPPED: "SHIPPED",
    COMPLETED: "COMPLETED",
    CANCELLED: "CANCELLED"
});

export const ORDER_STATUS_LABELS = Object.freeze({
    [ORDER_STATUS.NEW]: "Новий",
    [ORDER_STATUS.CONFIRMED]: "Підтверджено",
    [ORDER_STATUS.PAID]: "Оплачено",
    [ORDER_STATUS.PROCESSING]: "В обробці",
    [ORDER_STATUS.SHIPPED]: "Відправлено",
    [ORDER_STATUS.COMPLETED]: "Завершено",
    [ORDER_STATUS.CANCELLED]: "Скасовано"
});

export const ORDER_STATUS_OPTIONS = Object.freeze([
    {
        value: ORDER_STATUS.NEW,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.NEW]
    },
    {
        value: ORDER_STATUS.CONFIRMED,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.CONFIRMED]
    },
    {
        value: ORDER_STATUS.PAID,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.PAID]
    },
    {
        value: ORDER_STATUS.PROCESSING,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.PROCESSING]
    },
    {
        value: ORDER_STATUS.SHIPPED,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.SHIPPED]
    },
    {
        value: ORDER_STATUS.COMPLETED,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.COMPLETED]
    },
    {
        value: ORDER_STATUS.CANCELLED,
        label: ORDER_STATUS_LABELS[ORDER_STATUS.CANCELLED]
    }
]);