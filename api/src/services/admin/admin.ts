import { db } from 'src/lib/db'

export const users = async () => {
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
    },
  })
  return users
}

export const updateUserRole = async ({ id, role }) => {
  return await db.user.update({
    data: {
      role: role,
    },
    where: { id },
  })
}
