import React, {
  useEffect,
  useMemo,
  useCallback,
  useDebugValue,
  useState,
} from 'react';
import {PermissionsAndroid, RefreshControl} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import {Container} from './styles';
import {RootState} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';
import {getListagemCargasRequest} from '../../store/modules/cargas/actions/getListagemCargas';
import SnackbarAPI from '../../store/modules/snackbars/api';
import {CargaItem} from './CargaItem';

const ListagemCargas = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const dispatch = useDispatch();
  const {successPayload, isRequesting} = useSelector((states: RootState) => ({
    ...states.cargas.lista,
  }));

  const atualizarCargas = useCallback(() => {
    dispatch(
      getListagemCargasRequest({latitude: latitude, longitude: longitude}),
    );
  }, [dispatch, latitude, longitude]);

  useEffect(() => {
    atualizarCargas();
  }, [longitude, latitude]);

  useEffect(() => {
    async function getPermission() {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            // See error code charts below.
            SnackbarAPI.show(
              'Houve um problema ao buscar sua localização. Detalhes: ' +
                error.message,
            );
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        SnackbarAPI.show(
          'Permissão de acesso negado',
          SnackbarAPI.LENGTH_SHORT,
        );
      }
    }
    if (latitude === 0 && longitude === 0) {
      getPermission();
    }
  }, []);

  const cargas = useMemo((): any[] => {
    const cargas = successPayload.map((payload: any) =>
      payload.data.map((carga: any) => carga),
    );

    return [].concat(...cargas);
  }, [successPayload]);

  return (
    <Container>
      <Text>Cargas disponíveis em sua região</Text>
      <FlatList
        refreshing={isRequesting}
        refreshControl={
          <RefreshControl
            refreshing={isRequesting}
            onRefresh={atualizarCargas}
          />
        }
        data={cargas}
        renderItem={({item}) => (
          <CargaItem
            nomeProduto={item.produtoName}
            donoCarga={item.donoCarga}
            terminalInicial={item.terminalOrigem}
            terminalFinal={item.terminalDestino}
            unidadeMedida={item.unidadeMedidaName}
            volume={item.volumeSolicitado ?? item.volumeRestante}
          />
        )}
        keyExtractor={(item) => `${item.idCarga}`}
      />
    </Container>
  );
};

export default ListagemCargas;
