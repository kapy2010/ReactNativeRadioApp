//
//  OutputVolume.m
//  ReactNativeRadioApp
//
//  Created by kapil on 16/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "OutputVolume.h"
#import "React/RCTLog.h"
#import <AVFoundation/AVFoundation.h>

@interface OutputVolume ()
{
  AVAudioPlayer *_audioPlayer;
  NSTimer *_playerTimer;
}
@end


@implementation OutputVolume

#pragma mark - Public

//Initialize the audio player
- (instancetype)init
{
  self = [super init];
  if (self) {
    [self configureAudioPlayer];
  }
  return self;
}

- (void)playMusic {
  
  [_audioPlayer play];
  [_audioPlayer setMeteringEnabled:YES];
  
  if (!_playerTimer) {
    RCTLog(@"Inside the timer");
    _playerTimer = [NSTimer scheduledTimerWithTimeInterval:0.02
                            target:self
                            selector:@selector(monitorAudioPlayer:)
                            userInfo:nil
                            repeats:YES];
  }
  
}

RCT_EXPORT_MODULE();

// React Methods
RCT_EXPORT_METHOD(get)
{
  [self playMusic];
}

#pragma mark - Private

- (void) configureAudioPlayer {
  // Create audio player
  NSError *error = nil;
  NSString *path = [NSString stringWithFormat:@"%@/drum01.mp3", [[NSBundle mainBundle] resourcePath]];
  NSURL *soundUrl = [NSURL fileURLWithPath:path];
  _audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:soundUrl error:&error];
  
  if (error) {
    RCTLog(@"Error setting up audio player: %@", error.debugDescription);
  }
}

- (void) monitorAudioPlayer: (NSTimer*) timer {
  
  RCTLog(@"monitoring.........");
  [_audioPlayer updateMeters];
  
  for (int i=0; i<_audioPlayer.numberOfChannels; i++)
  {
    //Log the peak and average power
    RCTLog(@"%d %0.2f %0.2f", i, [_audioPlayer peakPowerForChannel:i],[_audioPlayer averagePowerForChannel:i]);
  }
}

@end
