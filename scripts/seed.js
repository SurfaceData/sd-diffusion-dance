import { db } from 'api/src/lib/db'
import { supabaseClient } from 'api/src/lib/supabase'

export default async () => {
  try {
    const { data: oldUsers, error } = await supabaseClient.auth.api.listUsers()
    await Promise.all(
      oldUsers.map(async (oldUser) => {
        const result = await supabaseClient.auth.api.deleteUser(oldUser.id)
      })
    )

    const data = [
      { email: 'client@example.com', password: 'client1234', role: 'general' },
      {
        email: 'steward.keith@example.com',
        password: 'keith1234',
        role: 'steward',
      },
      {
        email: 'steward.carina@example.com',
        password: 'carina1234',
        role: 'steward',
      },
      {
        email: 'admin.ten10@example.com',
        password: 'ten101234',
        role: 'admin',
      },
    ]
    await Promise.all(
      data.map(async (data) => {
        const { data: user, error } = await supabaseClient.auth.api.createUser({
          email: data.email,
          password: data.password,
          email_confirm: true,
        })
        const record = await db.userRoles.create({
          data: {
            id: user.id,
            role: data.role,
          },
        })
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
