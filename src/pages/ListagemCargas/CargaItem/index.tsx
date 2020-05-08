import React from 'react';
import {Card, Text} from 'react-native-paper';
import {Row, Column} from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useWindowDimensions} from 'react-native';
import numeral from 'numeral';

type CargaItemProps = {
  nomeProduto: string;
  donoCarga: string;
  terminalInicial: string;
  terminalFinal: string;
  volume: number;
  unidadeMedida: string;
};

export const CargaItem = ({
  nomeProduto,
  donoCarga,
  terminalFinal,
  terminalInicial,
  unidadeMedida,
  volume,
}: CargaItemProps) => {
  const {width} = useWindowDimensions();
  return (
    <Card style={{width: width * 0.9, margin: 5}}>
      <Card.Title
        title={nomeProduto}
        subtitle={`Solicitado por ${donoCarga}`}
      />
      <Card.Content>
        <Row style={{justifyContent: 'space-between'}}>
          <Column>
            <MaterialIcon
              name="location-on"
              style={{marginRight: 7}}
              color="#fff"
            />
            <Text>{terminalInicial}</Text>
          </Column>
          <Column>
            <MaterialIcon
              name="beenhere"
              style={{marginRight: 7}}
              color="#fff"
            />
            <Text>{terminalFinal}</Text>
          </Column>
        </Row>
        <Row style={{justifyContent: 'space-between'}}>
          <Column>
            <MaterialIcon
              name="equalizer"
              style={{marginRight: 7}}
              color="#fff"
            />
            <Text>
              {numeral(volume).format('0,0.00')} ({unidadeMedida})
            </Text>
          </Column>
        </Row>
      </Card.Content>
    </Card>
  );
};
