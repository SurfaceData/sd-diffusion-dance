import { createClient } from '@supabase/supabase-js'
import generateApiKey from 'generate-api-key'

import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

export default async ({ args }) => {
  const supabaseClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  const password =
    args.password || generateApiKey({ method: 'bytes', length: 12 })

  const { user, session, error } = await supabaseClient.auth.signUp({
    email: args.user,
    password: password,
  })

  const result = await db.userRoles.create({
    data: {
      id: user.id,
      role: 'admin',
    },
  })

  console.log(`Creating admin user ${args.user} with password: ${password}`)
}
