import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
  inet,
  index,
} from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable(
  "contact_submissions",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    // Basic Info
    fullName: varchar("full_name", { length: 120 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 30 }),

    // Company / Organization
    company: varchar("company", { length: 150 }),

    // Subject & Message
    subject: varchar("subject", { length: 200 }),
    message: text("message").notNull(),

    // Optional Metadata
    service: varchar("service", { length: 100 }),

    // Tracking
    isRead: boolean("is_read").default(false).notNull(),

    ipAddress: inet("ip_address"),
    userAgent: text("user_agent"),
    longitude: text("longitude"),
    latitude: text("latitude"),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at", {
      withTimezone: true,
    })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    emailIdx: index("contact_submissions_email_idx").on(table.email),
    createdAtIdx: index("contact_submissions_created_at_idx").on(
      table.createdAt,
    ),
    isReadIdx: index("contact_submissions_is_read_idx").on(table.isRead),
  }),
);
