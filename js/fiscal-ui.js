/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal UI
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    initializeFiscalUI();

});

/**
 * ============================================================
 * INITIALIZATION
 * ============================================================
 */

function initializeFiscalUI() {

    const createReceiptButton =
        document.getElementById("createReceipt");

    const cancelReceiptButton =
        document.getElementById("cancelReceipt");

    const fullReturnButton =
        document.getElementById("fullReturn");

    const partialReturnButton =
        document.getElementById("partialReturn");

    const returnActButton =
        document.getElementById("returnAct");

    const resendReceiptButton =
        document.getElementById("resendReceipt");

    console.log("Fiscal UI initialized.");

    console.log({
        createReceiptButton,
        cancelReceiptButton,
        fullReturnButton,
        partialReturnButton,
        returnActButton,
        resendReceiptButton
    });

    createReceiptButton?.addEventListener(
        "click",
        createReceipt
    );

    cancelReceiptButton?.addEventListener(
        "click",
        cancelReceipt
    );

    fullReturnButton?.addEventListener(
        "click",
        fullReturn
    );

    partialReturnButton?.addEventListener(
        "click",
        partialReturn
    );

    returnActButton?.addEventListener(
        "click",
        createReturnAct
    );

    resendReceiptButton?.addEventListener(
        "click",
        resendReceipt
    );

}

/**
 * ============================================================
 * CREATE RECEIPT
 * ============================================================
 */

function createReceipt() {

    console.log("Create Receipt button clicked.");

    document.dispatchEvent(

        new CustomEvent(

            "createFiscalReceipt"

        )

    );

}

/**
 * ============================================================
 * CANCEL RECEIPT
 * ============================================================
 */

function cancelReceipt() {

    console.log("Cancel Receipt button clicked.");

}

/**
 * ============================================================
 * FULL RETURN
 * ============================================================
 */

function fullReturn() {

    console.log("Full Return button clicked.");

}

/**
 * ============================================================
 * PARTIAL RETURN
 * ============================================================
 */

function partialReturn() {

    console.log("Partial Return button clicked.");

}

/**
 * ============================================================
 * RETURN ACT
 * ============================================================
 */

function createReturnAct() {

    console.log("Return Act button clicked.");

}

/**
 * ============================================================
 * RESEND RECEIPT
 * ============================================================
 */

function resendReceipt() {

    console.log("Resend Receipt button clicked.");

}