import React, { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { ListItem,Icon } from '@rneui/themed';

export default function AITalk() {
  const [expanded, setExpanded] = useState(false)
   const list2 = [
    {
      name: 'John Doe',
      subtitle: 'Developer',
      avatar_url: 'https://example.com/path/to/avatar1.jpg',
    },
    {
      name: 'Jane Doe',
      subtitle: 'Designer',
      avatar_url: 'https://example.com/path/to/avatar2.jpg',
    },
    // 以此类推，你可以添加更多的对象...
  ];
  
  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            <Icon name="place" size={30} />
            <ListItem.Content>
              <ListItem.Title>List Accordion</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
       
      </ListItem.Accordion>
    </View>
  )
}