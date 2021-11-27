import React from 'react';
import {
  Text,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  ScrollView,
  Button,
  Icon,
  HStack,
} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '../context/AuthContext';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('El email es un campo requerido'),
  password: Yup.string().required('El password es un campo requerido'),
});
const LoginScreen = () => {
  const {login, loginIsLoading} = useAuth();
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={e => login(e)}>
      {({errors, touched, handleChange, handleSubmit, values}) => (
        <ScrollView
          _contentContainerStyle={{
            p: '5',
            display: 'flex',
            height: 'full',
            justifyContent: 'center',
          }}>
          <HStack my={'5'} justifyContent={'center'} alignItems={'center'}>
            <Icon
              as={Material}
              name={'abjad-arabic'}
              size={'lg'}
              color={'gray.600'}
            />
            <Text color={'gray.600'} fontSize={'3xl'}>
              Hotels
            </Text>
          </HStack>
          <FormControl my="4" isInvalid={errors.email && touched.email}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Email
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                InputLeftElement={
                  <Icon
                    as={Material}
                    name="account"
                    size={'md'}
                    color={'muted.400'}
                    mx="1"
                  />
                }
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
          <FormControl my="4" isInvalid={errors.password && touched.password}>
            <Stack mx="4">
              <FormControl.Label>
                <Text fontSize="xl" color="gray.500">
                  Password
                </Text>
              </FormControl.Label>
              <Input
                variant={'underlined'}
                InputLeftElement={
                  <Icon
                    as={Material}
                    name="key"
                    size={'md'}
                    color={'muted.400'}
                    mx="1"
                  />
                }
                color="gray.500"
                onChangeText={handleChange('password')}
                value={values.password}
                _focus={{borderColor: 'orange.300'}}
                size="xl"
                type="password"
                placeholder="Password"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.password}
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Button
            isLoading={loginIsLoading}
            isLoadingText="Cargando"
            _loading={{bg: 'orange.200', color: 'gray.500', fontSize: 60, p: 4}}
            m="4"
            p="3"
            bg="orange.300"
            _pressed={{bg: 'orange.200'}}
            onPress={handleSubmit}>
            <Text fontSize="xl" color="white">
              Iniciar sesion
            </Text>
          </Button>
        </ScrollView>
      )}
    </Formik>
  );
};

export default LoginScreen;
