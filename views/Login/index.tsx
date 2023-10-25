import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import {loginUser} from "../../api/user";

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        console.log('Trying to login with: ', username, password);
       const res = await loginUser({username,password})
        console.log(res)
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>登录页面</Text>

            <Input
                placeholder='邮箱地址/账户名字'
                onChangeText={setUsername}
                rightIcon={
                    <Button
                        icon={<Icon name='send' size={15} color='white' />}
                        onPress={handleLogin}
                    />
                }
            />

            <Input
                placeholder='请输入密码'
                secureTextEntry={true} // Hide the password input
                onChangeText={setPassword}
            />

            <Button onPress={handleLogin} disabled={isLoading}>
                <Text>登录</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});
