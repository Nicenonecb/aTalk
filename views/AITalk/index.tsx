import React, { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon, Avatar } from '@rneui/themed';
import { Card, IconButton } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

type AITalkScreenProps = StackScreenProps<RootStackParamList, 'AITalk'>;

type RootStackParamList = {
  AITalk: undefined;
  Dialogue: undefined; // 如果这个页面需要参数，你可以在这里指定
  // ... 其他页面
};

export default function AITalk({ navigation }: AITalkScreenProps) {
  const [expanded, setExpanded] = useState(false)
  const [defaultLang, setSelectLang] = useState('英语')
  const optionList = [
    {
      lang: '英语',
    },
    {
      lang: '日语',
    },
    {
      lang: "韩语"
    }
    // 以此类推，你可以添加更多的对象...
  ];
  const selectLang = (v: any) => {
    setSelectLang(v.lang)
    setExpanded(false)
  }

  const enterTalk =()=>{
     navigation.navigate('Dialogue')
  }
  return (
    <View>
      <ListItem.Accordion
        content={
          <>

            <Icon name="language" size={25} style={styles.langIcon} />
            <ListItem.Content>
              <ListItem.Title>{defaultLang}</ListItem.Title>
            </ListItem.Content>

          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {optionList.map((l, i) => (
          <ListItem key={i} onPress={() => selectLang(l)} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.lang}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>

      <View style={styles.talkPart}>


        <Text>请选择对话场景</Text>
        <Text>新建对话场景</Text>
      </View>

      <Card>
        <View style={styles.cardTop}>
          <Card.Title title='IT面试1' subtitle="模拟最真实的老外面试官" right={(props) => <IconButton {...props} icon="arrow-right-thin" onPress={() => enterTalk} 
          
          />}></Card.Title>
    
        </View>


      </Card>


      <Card style={styles.card}>
          <Card.Title title='日常购物' subtitle="模拟最真实的老外" right={(props) => <IconButton {...props} icon="arrow-right-thin" onPress={() => { } } 
          
          />}></Card.Title>
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