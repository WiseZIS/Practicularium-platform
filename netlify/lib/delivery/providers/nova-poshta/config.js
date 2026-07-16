/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Nova Poshta Provider
 * Configuration
 * ============================================================
 */

/**
 * Base URL of Nova Poshta API.
 */
const API_URL = "https://api.novaposhta.ua/v2.0/json/";

/**
 * Request timeout (milliseconds).
 */
const REQUEST_TIMEOUT = 15000;

/**
 * Maximum retry attempts.
 *
 * Пока не используется,
 * но закладывается в архитектуру заранее.
 */
const MAX_RETRIES = 3;

module.exports = {

    API_URL,

    REQUEST_TIMEOUT,

    MAX_RETRIES

};