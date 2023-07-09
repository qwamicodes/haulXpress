import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types";

const useNavigationParams = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigation.navigate;
};

export default useNavigationParams;
