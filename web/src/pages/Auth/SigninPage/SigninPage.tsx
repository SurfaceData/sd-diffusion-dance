import { Container, Flex } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { Form, TextField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Button, LabeledInput } from '@surfacedata/sd-components'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = async (data) => {
    setError(null)
    try {
      const response = await logIn({
        ...data,
      })
      if (response?.error?.message) {
        setError(response.error.message)
      } else {
        navigate(routes.home())
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} className="p-4">
        {error && <p>{error}</p>}

        <Flex spacing="12px" direction="column" gap="4">
          <LabeledInput name="username" label="Email" as={TextField} />

          <LabeledInput name="password" label="Password" type="password" />

          <Flex align="center" direction="column">
            <Button width="12" variant="solid" type="submit">
              Login
            </Button>
          </Flex>
        </Flex>
      </Form>
      <Container>
        New User? <Link to={routes.signup()}>Sign Up</Link>
      </Container>
    </Container>
  )
}

export default SigninPage
