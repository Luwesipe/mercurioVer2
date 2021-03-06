import styled from 'styled-components/native'

export const Container = styled.View`
    background: #fff;
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 3;
    border: 1px solid #ddd;
    align-items: center;
    padding: 20px;
`
export const TypeTitle = styled.Text`
    font-size: 20px;
    color: #222;
    text-align: center;
`;
export const TypeDescription = styled.Text`
    color: #666;
    font-size: 14px;
    text-align: center;
`;
export const TypeImage = styled.Image`
    height: 80px;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
`;
export const RequestButton = styled.TouchableOpacity`
    background: #222;
    justify-content: center;
    align-items: center;
    height: 44px;
    align-self: stretch;
    margin-top: 10px;
    borderRadius: 20px;
`;
export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;