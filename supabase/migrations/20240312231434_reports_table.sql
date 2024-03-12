create table
  moderation.reports (
    id smallint generated by default as identity,
    uuid uuid,
    user_id uuid,
    post_id uuid not null,
    created_at timestamp with time zone not null,
    reason text not null,
    constraint reports_pkey primary key (id)
  ) tablespace pg_default;


grant all on table moderation.reports to service_role;