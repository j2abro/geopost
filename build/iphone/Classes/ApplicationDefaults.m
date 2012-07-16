/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"aU4OORg64cUZDwPLSve0qBoAwHW33PQW"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"5cu4IZ3T2bvrxWrnflOUdmMblUkMmSvv"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"UaLZ2btyoIRMdNJ5F3nFET2K0AgeBS6M"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"laNUPB0osSajHLMVZNYwqvs0XBlSyFUx"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"tmrk68n7SfSDVhB72ru8xEzzDmqtN3IM"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"7lLst9OOrMv6XpCV93wm3lfNHWJoiTJs"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
