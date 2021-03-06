import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '../../style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: metrics.baseMargin + 10,
    paddingHorizontal: metrics.basePadding,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  baged: {
    backgroundColor: colors.secondary,
    borderRadius: 18,
    padding: 8,
  },
  content: {
    height: metrics.screenHeight - 150,
    width: metrics.screenWidth - 30,
  },
  flatlistContainer: {
    borderRadius: metrics.baseRadius,
    flex: 1,
    marginHorizontal: 5,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  flatlist: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    padding: 15,
    justifyContent: 'center',
  },
  flatlistImage: {
    marginBottom: 15,
    height: 74,
    width: 74,
  },
  title: {
    color: colors.primary,
    fontFamily: general.fontBold,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
