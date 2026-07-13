/*
=========================================================
PRACTICULARIUM Platform
Migration: 003-enable-rls.sql

Version: 1.0
Date: 2026-07-08

Description:
Enable Row Level Security.
Create Service Role access policy.

Author:
PRACTICULARIUM Platform
=========================================================
*/


ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role full access"
ON public.orders;

CREATE POLICY "Service role full access"
ON public.orders
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);