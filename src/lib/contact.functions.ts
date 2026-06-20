import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().max(40).optional().or(z.literal("")),
  role: z.enum(["agent", "host", "other"]),
  message: z.string().trim().min(1).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp || null,
      role: data.role,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Failed to submit. Please try again.");
    }
    return { ok: true };
  });
