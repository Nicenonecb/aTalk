import React, { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon,Card ,Button} from '@rneui/themed';
import { StackScreenProps } from '@react-navigation/stack';
import DialogueModal from './components/DialogueModal'
type AITalkScreenProps = StackScreenProps<RootStackParamList, 'AITalk'>;

type RootStackParamList = {
  AITalk: undefined;
  Dialogue: undefined; // 如果这个页面需要参数，你可以在这里指定
  // ... 其他页面
};

export default function AITalk({ navigation }: AITalkScreenProps) {

  const  [createVisible,setCreateVisible] =useState(false)
  const enterTalk =()=>{
     navigation.navigate('Dialogue')
  }


  const handleCreateDialogue = ()=>{
    setCreateVisible(true)
  }

  const hideModal = () => {
    setCreateVisible(false);
  };

  return (
    <View>
      <DialogueModal visible={createVisible} hideModal={hideModal}></DialogueModal>


      <View style={styles.talkPart}>


        <Text>请选择对话场景</Text>
        <Text onPress={handleCreateDialogue}>新建对话场景</Text>

      </View>

      <Card>

          <Card.Title onPress={enterTalk}> 外企m面试</Card.Title>

      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  talkPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 30
  },
  langIcon: {
    marginRight: 10,
  },
  cardTop: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
  },
  card:{
    marginTop:12
  }
});