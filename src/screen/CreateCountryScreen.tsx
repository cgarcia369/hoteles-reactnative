import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  ScrollView,
  Stack,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import * as Yup from 'yup';
import {useCountry} from '../context/CountryContext';
import {ImageBackground, StyleSheet} from 'react-native';
import {Formik} from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es un campo requerido '),
  shortName: Yup.string().required('La nombre corto es un campo requerido '),
});
const CreateCountryScreen = () => {
  const {isCreateLoading, createCountry} = useCountry();
  return (
    <ScrollView _contentContainerStyle={{alignItems: 'center', h: 'auto'}}>
      <Box h={'24'} w={'full'} position={'relative'}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: 'https://i.picsum.photos/id/398/800/800.jpg?hmac=9JO2hPmLa2hY2pCRVSY-dXV4wsIy_lOGEMO4eWQNP2E',
          }}
          style={styles.img}
        />
        <Box
          w={'full'}
          h={'full'}
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          bg={'gray.800'}
          opacity={75}
        />
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Heading size={'md'} color={'white'}>
            Crear pais
          </Heading>
        </Box>
      </Box>
      <VStack px={'5'} w={'full'} mt={'4'}>
        <Formik
          initialValues={{
            name: '',
            shortName: '',
          }}
          validationSchema={validationSchema}
          onSubmit={e => {
            createCountry(e);
          }}>
          {({errors, touched, values, handleSubmit, handleChange}) => {
            return (
              <>
                <FormControl my="1" isInvalid={!!(errors.name && touched.name)}>
                  <Stack mx="4">
                    <FormControl.Label>
                      <Text fontSize="md" color="gray.500">
                        Nombre
                      </Text>
                    </FormControl.Label>
                    <Input
                      variant={'underlined'}
                      color="gray.500"
                      onChangeText={handleChange('name')}
                      value={values.name}
                      _focus={{borderColor: 'orange.300'}}
                      size="md"
                      type="text"
                      placeholder="Nombre"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.name}
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
                <FormControl
                  my="2"
                  isInvalid={!!(errors.shortName && touched.shortName)}>
                  <Stack mx="4">
                    <FormControl.Label>
                      <Text fontSize="md" color="gray.500">
                        Nombre Corto
                      </Text>
                    </FormControl.Label>
                    <Input
                      variant={'underlined'}
                      color="gray.500"
                      onChangeText={handleChange('shortName')}
                      value={values.shortName}
                      _focus={{borderColor: 'orange.300'}}
                      size="md"
                      type="text"
                      placeholder="Nombre Corto"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.shortName}
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>

                <Button
                  isLoading={isCreateLoading}
                  isLoadingText="Cargando"
                  _loading={{
                    bg: 'orange.200',
                    color: 'gray.500',
                    fontSize: 60,
                    p: 4,
                  }}
                  m="4"
                  p="3"
                  bg="orange.300"
                  _pressed={{bg: 'orange.200'}}
                  onPress={handleSubmit}>
                  <Text fontSize="xl" color="white">
                    Guardar
                  </Text>
                </Button>
              </>
            );
          }}
        </Formik>
      </VStack>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: '100%',
    // height: '50%',
    backgroundColor: 'red',
  },
});
export default CreateCountryScreen;
