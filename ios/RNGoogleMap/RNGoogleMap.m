#import "RNGoogleMap.h"
#import "RCTLog.h"

@implementation RNGoogleMap
-(id)init {
    if ( self = [super init] ) {
        self.myLocationEnabled = YES;
        CLLocation *location = self.myLocation;
        CLLocationCoordinate2D coordinate = [location coordinate];
//      coordinate.latitude = 12.9875;
//      coordinate.longitude =80.2046;
        GMSCameraUpdate *update = [GMSCameraUpdate  setTarget:coordinate
                                                        zoom:16];
        [self  animateWithCameraUpdate:update];
        }
    return self;
}
@end
