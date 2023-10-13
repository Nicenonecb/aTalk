// Import necessary libraries
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dialogue = () => {
   const [message, setMessage] = useState('');
   const [chat, setChat] = useState([]);

   // Handle sending messages
   const handleSend = () => {
      if (message.trim() !== '') {
         setChat(prevChat => [...prevChat, { text: message, user: 'user' }]);
         setMessage('');
      }
   };

   return (
       <View style={styles.container}>
          <ScrollView style={styles.chatContainer}>
             {chat.map((msg, index) => (
                 <Text key={index} style={styles.message}>
                    {msg.text}
                 </Text>
             ))}
          </ScrollView>

          <View style={styles.inputContainer}>
             <Input
                 placeholder='Type your message...'
                 value={message}
                 onChangeText={setMessage}
                 rightIcon={
                    <Button
                        icon={<Icon name='send' size={15} color='white' />}
                        onPress={handleSend}
                    />
                 }
             />
          </View>
       </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   chatContainer: {
      flex: 1,
      padding: 10,
   },
   message: {
      padding: 10,
      margin: 5,
      backgroundColor: '#f1f1f1',
      borderRadius: 5,
   },
   inputContainer: {
      padding: 10,
   },
});

export default Dialogue;
