import Colors from './Colors';

const styles = {
  header: {
    titleStyle: {
      color: Colors.generalTextColor,
      fontFamily: 'Lato_400Regular',
      fontSize: 24,
      fontWeight: 'normal',
    },
    navigationBarStyle: {
      backgroundColor: Colors.backgroundColor,
    }
  },
  bottomButton: {
    position: 'absolute',
    bottom: 100,
    left: 40,
    right: 40,
  },
  authorizationTxtContainer: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
  }
};

export default styles;
