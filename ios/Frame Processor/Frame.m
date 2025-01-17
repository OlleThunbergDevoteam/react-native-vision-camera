//
//  Frame.m
//  VisionCamera
//
//  Created by Marc Rousavy on 08.06.21.
//  Copyright © 2021 mrousavy. All rights reserved.
//

#import "Frame.h"
#import <Foundation/Foundation.h>
#import <CoreMedia/CMSampleBuffer.h>

@implementation Frame {
  CMSampleBufferRef buffer;
  CVPixelBufferRef depth;
  UIImageOrientation orientation;
}

- (instancetype) initWithBuffer:(CMSampleBufferRef)buffer orientation:(UIImageOrientation)orientation {
  self = [super init];
  if (self) {
    _buffer = buffer;
    _orientation = orientation;
  }
  return self;
}

- (instancetype) initWithBufferAndDepth:(CMSampleBufferRef)buffer depth:(CVPixelBufferRef)depth orientation:(UIImageOrientation)orientation {
  self = [super init];
  if (self) {
    _buffer = buffer;
    _depth = depth;
    _orientation = orientation;
  }
  return self;
}

@synthesize buffer = _buffer;
@synthesize depth = _depth;
@synthesize orientation = _orientation;

@end
