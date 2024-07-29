import { View } from 'react-native';

import { screenStyle } from '../../constants';
import { useAppSelector } from '../../hooks';
import AvailableTruck from '../Haul/components/AvailableTrucks';

const Journey = () => {
  const { journey } = useAppSelector(state => state.auth.user);

  return (
    <View style={[screenStyle]}>
      {journey.map((props, index) => (
        <AvailableTruck key={index} type='journey' {...props} />
      ))}
    </View>
  );
};

export default Journey;
