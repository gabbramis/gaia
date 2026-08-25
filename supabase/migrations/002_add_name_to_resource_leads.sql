-- Add name column if it doesn't exist
alter table resource_leads add column if not exists name text;
