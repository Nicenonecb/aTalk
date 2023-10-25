import React, {useState} from 'react';

import { View, StyleSheet } from 'react-native';
import {Dialog, Input, Button, Text, ListItem, Icon} from '@rneui/themed';

export default function DialogueModal({ visible, hideModal }) {

    const [language, setLanguage] = React.useState('');
    const [scene, setScene] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleOk = () => {
        console.log('Selected Language: ', language);
        console.log('Dialogue Scene: ', scene);
        console.log('Dialogue Description: ', description);
        hideModal();
    };
    const [expanded, setExpanded] = useState(false)
    const [defaultLang, setSelectLang] = useState('英语')


    const selectLang = (v: any) => {
        setSelectLang(v.lang)
        setExpanded(false)
    }

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

    return (

            <Dialog visible={visible} onDismiss={hideModal} style={styles.dialog}>
                <Dialog.Title style={styles.title}>新建对话卡片</Dialog.Title>
                    <Text style={styles.label}>语言选择:</Text>
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
                    <Input
                        label="对话场景"
                        value={scene}
                        onChangeText={setScene}
                        mode="outlined"
                        placeholder={"在机场迷路了求助警察"}
                        style={styles.input}
                    />
                    {/*<Text style={styles.label}>对话描述:</Text>*/}
                    <Input
                        label="对话描述"
                        value={description}
                        onChangeText={setDescription}
                        mode="outlined"
                        placeholder={"要求警察和蔼可亲的和我对话"}
                        multiline
                        numberOfLines={4}
                        style={styles.inputArea}
                    />

                <Dialog.Actions>
                    <Dialog.Button onPress={hideModal} style={styles.button}>取消</Dialog.Button>
                    <Dialog.Button onPress={handleOk} style={styles.button}>确定</Dialog.Button>
                </Dialog.Actions>
            </Dialog>

    );
}

const styles = StyleSheet.create({
    dialog: {
        // 自定义对话框样式
    },
    title: {
        // 自定义标题样式
    },
    label: {
        marginTop: 10,
        marginBottom: 6,
    },
    input: {
        marginBottom: 10,
    },
    inputArea: {
        marginBottom: 10,
    },
    button: {
        marginRight: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        marginBottom: 15,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        marginBottom: 15,
    },
});
