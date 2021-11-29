import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  ScrollView,
  Select,
  Stack,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import * as Yup from 'yup';
import {useCountry} from '../context/CountryContext';
import {useHotel} from '../context/HotelContext';
import {ImageBackground, StyleSheet} from 'react-native';
import {Formik} from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es un campo requerido '),
  address: Yup.string().required('La direccion es un campo requerido '),
  rating: Yup.number()
    .required('El rating es un campo requerido ')
    .min(1, 'El rating es un campo requerido '),
  countryId: Yup.number()
    .required('El pais es un campo requerido ')
    .min(1, 'El pais es un campo requerido '),
});
const CreateHotelScreen = () => {
  const {data} = useCountry();
  const {isCreateLoading, createHotel} = useHotel();
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
            Crear hotel
          </Heading>
        </Box>
      </Box>
      <VStack px={'5'} w={'full'} mt={'4'}>
        <Formik
          initialValues={{
            name: '',
            address: '',
            rating: 1,
            countryId: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={e => {
            createHotel(e);
          }}>
          {({
            setFieldValue,
            errors,
            touched,
            values,
            handleSubmit,
            handleChange,
          }) => {
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
                  isInvalid={!!(errors.address && touched.address)}>
                  <Stack mx="4">
                    <FormControl.Label>
                      <Text fontSize="md" color="gray.500">
                        Direccion
                      </Text>
                    </FormControl.Label>
                    <Input
                      variant={'underlined'}
                      color="gray.500"
                      onChangeText={handleChange('address')}
                      value={values.address}
                      _focus={{borderColor: 'orange.300'}}
                      size="md"
                      type="text"
                      placeholder="Direccion"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.address}
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
                <FormControl
                  my="2"
                  isInvalid={!!(errors.rating && touched.rating)}>
                  <Stack mx="4">
                    <FormControl.Label>
                      <Text fontSize="md" color="gray.500">
                        Rating
                      </Text>
                    </FormControl.Label>
                    <Select
                      fontSize={'sm'}
                      px={'2'}
                      color={'gray.500'}
                      selectedValue={values.rating.toString()}
                      onValueChange={e =>
                        setFieldValue('rating', parseInt(e), true)
                      }>
                      <Select.Item label={'1 Estrella'} value={'1'} />
                      <Select.Item label={'2 Estrellas'} value={'2'} />
                      <Select.Item label={'3 Estrellas'} value={'3'} />
                      <Select.Item label={'4 Estrellas'} value={'4'} />
                      <Select.Item label={'5 Estrellas'} value={'5'} />
                    </Select>
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.rating}
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
                <FormControl
                  my="2"
                  isInvalid={!!(errors.countryId && touched.countryId)}>
                  <Stack mx="4">
                    <FormControl.Label>
                      <Text fontSize="md" color="gray.500">
                        Pais
                      </Text>
                    </FormControl.Label>
                    <Select
                      fontSize={'sm'}
                      px={'2'}
                      color={'gray.500'}
                      selectedValue={values.countryId.toString()}
                      onValueChange={e =>
                        setFieldValue('countryId', parseInt(e), true)
                      }>
                      <Select.Item label={'Elija un pais'} value={'0'} />
                      {data?.map(e => {
                        return (
                          <Select.Item
                            key={e.id}
                            label={e.name}
                            value={e.id.toString()}
                          />
                        );
                      })}
                    </Select>
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.countryId}
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
export default CreateHotelScreen;
