//
//  AudioPlayer.m
//  ReactNativeRadioApp
//
//  Created by kapil on 16/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "AudioPlayer.h"
#import "React/RCTLog.h"
#import <AVFoundation/AVFoundation.h>

@interface AudioPlayer ()
{
  AVAudioPlayer *_audioPlayer;
  NSTimer *timer;
}
@end


@implementation AudioPlayer

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
  
  
  timer = [NSTimer timerWithTimeInterval:0.02
                          target:self
                          selector:@selector(monitorAudioPlayer:)
                          userInfo:nil
                          repeats:YES];
  [[NSRunLoop mainRunLoop] addTimer:timer forMode:NSRunLoopCommonModes];
  
}

- (void) stopMusic {
  
  [_audioPlayer stop];
  [timer invalidate];
  timer = nil;
}

- (int) getDuration {
  return [_audioPlayer duration];
}

RCT_EXPORT_MODULE();

// React Methods
RCT_EXPORT_METHOD(play)
{
  [self playMusic];
}

RCT_EXPORT_METHOD(stop)
{
  [self stopMusic];
}

RCT_REMAP_METHOD(getDurationOfSong,
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  int duration = [self getDuration];
  NSString* durationString = [NSString stringWithFormat:@"%d", duration];

  if (durationString) {
    resolve(durationString);
  } else {
    reject(@"get_error", @"Error getting duration", nil);
  }
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
  
  [_audioPlayer updateMeters];
  
  for (int i=0; i<_audioPlayer.numberOfChannels; i++)
  {
    //Log the peak and average power
//    RCTLog(@"%d %0.2f %0.2f", i, [_audioPlayer peakPowerForChannel:i],[_audioPlayer averagePowerForChannel:i]);
  }
}

@end
