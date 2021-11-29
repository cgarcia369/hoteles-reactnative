import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RegisterRequest} from '../interfaces/appInterfaces';
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  WarningOutlineIcon,
  Button,
  Select,
} from 'native-base';
import {useAuth} from '../context/AuthContext';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('El email es un campo requerido'),
  password: Yup.string().required('El password es un campo requerido'),
  firstName: Yup.string().required('El nombre es un campo requerido'),
  lastName: Yup.string().required('El apellido es un campo requerido'),
  phoneNumber: Yup.string().required(
    'El numero de celular es un campo requerido',
  ),
  roles: Yup.array().min(1, 'El rol es un campo requerido'),
});
const RegisterScreen = () => {
  const {register, registerIsLoading} = useAuth();
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={
        {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          roles: [],
        } as RegisterRequest
      }
      onSubmit={e => register(e)}>
      {({
        setFieldValue,
        handleChange,
        values,
        handleSubmit,
        errors,
        touched,
      }) => (
        <ScrollView
          _contentContainerStyle={{
            p: '5',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <FormControl my="4" isInvalid={!!(errors.email && touched.email)}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Email
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                color="gray.500"
                onChangeText={handleChange('email')}
                value={values.email}
                _focus={{borderColor: 'orange.400'}}
                size="xl"
                type="text"
                placeholder="Email"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.email}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl
            my="4"
            isInvalid={!!(errors.password && touched.password)}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Password
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                color="gray.500"
                onChangeText={handleChange('password')}
                value={values.password}
                _focus={{borderColor: 'orange.400'}}
                size="xl"
                type="text"
                placeholder="Password"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.password}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl
            my="4"
            isInvalid={!!(errors.firstName && touched.firstName)}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Nombre
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                color="gray.500"
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                _focus={{borderColor: 'orange.400'}}
                size="xl"
                type="text"
                placeholder="Nombre"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.firstName}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl
            my="4"
            isInvalid={!!(errors.lastName && touched.lastName)}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Apellidos
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                color="gray.500"
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                _focus={{borderColor: 'orange.400'}}
                size="xl"
                type="text"
                placeholder="Apellidos"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.lastName}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl
            my="4"
            isInvalid={!!(errors.phoneNumber && touched.phoneNumber)}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Numero de celular
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                color="gray.500"
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
                _focus={{borderColor: 'orange.400'}}
                size="xl"
                type={'text'}
                placeholder="Numero de celular"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.phoneNumber}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl my="4" isInvalid={!!(errors.roles && touched.roles)}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Rol
                </Text>
              </FormControl.Label>
              <Select
                fontSize={'lg'}
                px={'6'}
                color={'gray.500'}
                selectedValue={values.roles[0]}
                onValueChange={e => setFieldValue('roles', [e], true)}>
                <Select.Item label={'Administrador'} value={'ADMINISTRATOR'} />
                <Select.Item label={'Usuario'} value={'USER'} />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.roles}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Button
            isLoading={registerIsLoading}
            isLoadingText="Cargando"
            _loading={{bg: 'orange.200', color: 'gray.500', fontSize: 60, p: 4}}
            m="4"
            p="3"
            bg="orange.300"
            _pressed={{bg: 'orange.200'}}
            onPress={handleSubmit}>
            <Text fontSize="xl" color="white">
              Registrarse
            </Text>
          </Button>
        </ScrollView>
      )}
    </Formik>
  );
};

export default RegisterScreen;
