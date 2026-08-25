-- Create resource_leads table
create table resource_leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  resource_id text not null,
  resource_slug text not null,
  created_at timestamptz not null default now()
);

-- Add unique constraint to prevent duplicate email + resource combinations
create unique index resource_leads_email_resource_unique
  on resource_leads (email, resource_id);

-- Enable Row Level Security
alter table resource_leads enable row level security;

-- Policy: Allow inserts from anon (API route uses service role, but we keep it open for inserts)
create policy "Allow inserts to resource_leads"
  on resource_leads
  for insert
  to anon
  with check (true);

-- Policy: Deny all reads from anon (protects lead data)
create policy "Deny reads from anon"
  on resource_leads
  for select
  to anon
  using (false);

-- Policy: Deny updates and deletes from anon
create policy "Deny updates from anon"
  on resource_leads
  for update
  to anon
  using (false);

create policy "Deny deletes from anon"
  on resource_leads
  for delete
  to anon
  using (false);
