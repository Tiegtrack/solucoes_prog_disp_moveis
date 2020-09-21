import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [contato, setContato] = useState ('');
  const [telefone, setTelefone] = useState ('');
  const [contatos, setContatos] = useState ('');
  const [contadorContatos, setContadorContatos] = useState (10);

  const capturarContato = (contato) => {
    setContato(contato);
  }
  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
  }

  const cadastrarContato = () => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos + 2);
      return [...contatos, {key: contadorContatos.toString(), value1: contato, value2: telefone}]
    })
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <View style= {estilos.entradaView}>
        <TextInput
          placeholder="Nome..." 
          style={estilos.contatoInputText}
          onChangeText={capturarContato}
          value={contato}
        />

        <TextInput 
          placeholder="Telefone..." 
          style={estilos.telefoneInputText}
          onChangeText={capturarTelefone}
          value={telefone}
        />

        <Button
        title="Cadastrar"
        onPress={cadastrarContato}
        />
      </View>
      
      <View class={estilos.classe}>
        <FlatList 
          data={contatos}
          renderItem={
            (contadorContatos) => (
              <View>
                <Text style={estilos.itemNaListaView1}>
                  {"Nome: " + contadorContatos.item.value1}
                </Text>
                <Text style={estilos.itemNaListaView2}>
                  {"Telefone: " + contadorContatos.item.value2}
                </Text>
              </View>
            )        
          }
        />
      </View>
    </View>
    );
  }
  
    const estilos = StyleSheet.create({
      
      entradaView: {
        marginBottom: 8
      },
    
      classe: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "row"
      },

      itemNaListaView1: {
        width: '60%',
        padding: 2,
        backgroundColor: 'pink',
        borderColor: 'red',
        borderWidth: 2,
        marginBottom: 3,
        borderRadius: 8,
        justifyContent: 'flex-start'
      },

      itemNaListaView2: {
        width: '60%',
        padding: 2,
        backgroundColor: 'lightblue',
        borderColor: 'blue',
        borderWidth: 2,
        marginBottom: 30,
        borderRadius: 8,
        justifyContent: 'flex-end'
      },
    
      telaPrincipalView: {
        padding: 50
      },
      lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
      },
      contatoInputText: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
      },
      telefoneInputText: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
      }
      });
