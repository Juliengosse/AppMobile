import { Button } from 'react-native-elements';

const ButtonMode = ({ title } : any) => {

    return(
        <Button
            title={title}
            buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
                height: 100,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{
                width: 150,
                marginVertical: 10,
            }}
        />
    );
}


export default ButtonMode;