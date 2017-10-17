//
//  OutputVolume.m
//  ReactNativeRadioApp
//
//  Created by kapil on 16/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "OutputVolume.h"
#import "React/RCTLog.h"
#import <AudioToolbox/AudioToolbox.h>
#import <AVFoundation/AVFoundation.h>

@interface OutputVolume ()
{
  AVAudioPlayer *_audioPlayer;
}
@end

@implementation OutputVolume

RCT_EXPORT_MODULE();

// We can send back a promise to our JavaScript environment :)
RCT_EXPORT_METHOD(get)
{
  float volume = [AVAudioSession sharedInstance].outputVolume;
  NSString* volumeString = [NSString stringWithFormat:@"%f", volume];
  
  NSString *path = [NSString stringWithFormat:@"%@/drum01.mp3", [[NSBundle mainBundle] resourcePath]];
  NSURL *soundUrl = [NSURL fileURLWithPath:path];
  
  // Create audio player object and initialize with URL to sound
  _audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:soundUrl error:nil];
  
  if ([_audioPlayer play]) {
    RCTLog(@"Song played");
  } else {
    RCTLog(@"Song not playing.......");
  }
  
  RCTLog(@"duration: %f", (float)_audioPlayer.duration);
  RCTLog(@"number of channels: %f", (float)_audioPlayer.numberOfChannels);
  
//  if (volumeString) {
//    resolve(volumeString);
//  } else {
//    reject(@"get_error", @"Error getting system volume", nil);
//  }
  
}

@end
