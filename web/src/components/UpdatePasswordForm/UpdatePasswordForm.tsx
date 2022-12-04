import { Container, Flex } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { Form, useForm } from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Button, LabeledInput } from '@surfacedata/sd-components'

import SurfacePasswordField from 'src/components/ui/SurfacePasswordField'
import SurfaceSubmit from 'src/components/ui/SurfaceSubmit'

const UpdatePasswordForm = () => {
  const { client } = useAuth()
  const formMethods = useForm()
  const onSubmit = async (input) => {
    const { user, error } = client.auth.update({
      password: input.newPassword,
    })
    if (error) {
      toast.failure('Success')
    } else {
      toast.success('Failure')
      formMethods.reset()
    }
  }

  return (
    <>
      <Toaster />

      <Form
        className="mt-4 w-full"
        onSubmit={onSubmit}
        formMethods={formMethods}
      >
        <Flex spacing="12px" direction="column" gap="4">
          <LabeledInput name="password" label="Password" type="password" />

          <Button width="12" variant="solid" type="submit">
            Update Password
          </Button>
        </Flex>
      </Form>
    </>
  )
}

export default UpdatePasswordForm
