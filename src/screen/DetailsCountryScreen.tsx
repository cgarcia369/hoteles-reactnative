import React, {useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
  Modal,
  WarningOutlineIcon,
} from 'native-base';
import {Country} from '../interfaces/appInterfaces';
import {ImageBackground, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {useCountry} from '../context/CountryContext';
import Evil from 'react-native-vector-icons/EvilIcons';
import * as Yup from 'yup';

type DetailsCountryScreenProps = {
  route: {
    params: Country;
  };
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es un campo requerido '),
  shortName: Yup.string().required('La nombre corto es un campo requerido '),
});
const DetailsCountryScreen = ({route}: DetailsCountryScreenProps) => {
  const {editCountry, isDeleteLoading, isEditLoading, deleteCountry} =
    useCountry();
  const [editEnabled, setEditEnabled] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  return (
    <>
      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>¿Esta seguro de eliminar este pais?</Modal.Header>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setDeleteModal(false);
                }}>
                Cancelar
              </Button>
              <Button
                isLoading={isDeleteLoading}
                isLoadingText="Cargando"
                onPress={() => {
                  deleteCountry(route.params.id);
                }}>
                Eliminar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <ScrollView _contentContainerStyle={{alignItems: 'center', h: 'auto'}}>
        <Box h={'40'} w={'full'} position={'relative'}>
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
              {route.params.name}
            </Heading>
            <VStack m={'3'} position={'absolute'} right={0} top={0}>
              <Pressable my="5" onPress={() => setEditEnabled(!editEnabled)}>
                <Icon size={'lg'} color={'white'} as={Evil} name={'pencil'} />
              </Pressable>
              <Pressable my="5" onPress={() => setDeleteModal(true)}>
                <Icon size={'lg'} color={'white'} as={Evil} name={'trash'} />
              </Pressable>
            </VStack>
          </Box>
        </Box>
        <VStack px={'5'} w={'full'} mt={'4'}>
          <Formik
            initialValues={route.params}
            validationSchema={validationSchema}
            onSubmit={e => {
              editCountry({
                id: e.id,
                name: e.name,
                shortName: e.shortName,
              });
            }}>
            {({errors, touched, values, handleSubmit, handleChange}) => {
              return (
                <>
                  <FormControl
                    my="1"
                    isInvalid={!!(errors.name && touched.name)}>
                    <Stack mx="4">
                      <FormControl.Label>
                        <Text fontSize="md" color="gray.500">
                          Nombre
                        </Text>
                      </FormControl.Label>
                      <Input
                        isDisabled={!editEnabled}
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
                          Nombre corto
                        </Text>
                      </FormControl.Label>
                      <Input
                        isDisabled={!editEnabled}
                        variant={'underlined'}
                        color="gray.500"
                        onChangeText={handleChange('shortName')}
                        value={values.shortName}
                        _focus={{borderColor: 'orange.300'}}
                        size="md"
                        type="text"
                        placeholder="Direccion"
                      />
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors.shortName}
                      </FormControl.ErrorMessage>
                    </Stack>
                  </FormControl>
                  <Button
                    display={!editEnabled ? 'none' : 'flex'}
                    isLoading={isEditLoading}
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
    </>
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
export default DetailsCountryScreen;
