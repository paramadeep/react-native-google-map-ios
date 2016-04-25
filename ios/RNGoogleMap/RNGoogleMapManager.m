#import "RNGoogleMapManager.h"
#import "RNGoogleMap.h"

@implementation RNGoogleMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  RNGoogleMap *map = [[RNGoogleMap alloc] init];
  return map;
}

@end
