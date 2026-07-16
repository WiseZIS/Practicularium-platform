/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Nova Poshta API
 * Common Requests
 * ============================================================
 */

import { callNovaPoshta } from "../client.js";

/**
 * Check API connection.
 *
 * Uses one of the simplest Common API methods
 * to verify communication with Nova Poshta.
 */
export async function testConnection() {

    return await callNovaPoshta(

        "Common",

        "getTimeIntervals",

        {}

    );

}