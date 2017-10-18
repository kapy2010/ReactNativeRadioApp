//
//  AudioPlayer.h
//  ReactNativeRadioApp
//
//  Created by kapil on 16/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface AudioPlayer : NSObject <RCTBridgeModule>

- (void)playMusic;
- (void)stopMusic;
- (int)getDuration;
- (void)monitorAudioPlayer: (NSTimer*) timer;

@end
