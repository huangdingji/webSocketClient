import * as $protobuf from "protobufjs";
/** Namespace protocol. */
export namespace protocol {

    /** MSG enum. */
    enum MSG {
        Default = 0,
        BattleLogin = 1000,
        BattleSync = 1001,
        BattleTimeout = 1002,
        BattleStatus = 1003,
        BattleLoading = 1004,
        BattleFinish = 1005,
        BattleHeartbeat = 1006,
        BattleReLogin = 1007,
        BattleFrameList = 1008,
        BattleJoin = 1009,
        TeamExit = 2001,
        TeamList = 2002,
        MatchBattleInfo = 2003,
        TeamBeginMatch = 2004,
        TeamDelMatch = 2005,
        TeamRobotAdd = 2006,
        TeamRobotRemove = 2007,
        TeamPosChange = 2008,
        TeamReady = 2009,
        TeamCreate = 2010,
        TeamApply = 2011,
        TeamByApply = 2012,
        TeamJoin = 2013,
        TeamRefuse = 2014,
        TeamByRefuse = 2015,
        Login = 3000,
        Kick = 3002,
        Notice = 3003,
        ClientError = 3004,
        Heartbeat = 3005,
        HeroBuy = 3006,
        BattleEnd = 3007,
        BattleStart = 3008
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request loginRequest */
        loginRequest?: (protocol.ILoginRequest|null);

        /** Request battleSyncRequest */
        battleSyncRequest?: (protocol.IBattleSyncRequest|null);

        /** Request battleLoginRequest */
        battleLoginRequest?: (protocol.IBattleLoginRequest|null);

        /** Request battleLoadingRequest */
        battleLoadingRequest?: (protocol.IBattleLoadingRequest|null);

        /** Request teamCreateRequest */
        teamCreateRequest?: (protocol.ITeamCreateRequest|null);

        /** Request teamJoinRequest */
        teamJoinRequest?: (protocol.ITeamJoinRequest|null);

        /** Request teamApplyRequest */
        teamApplyRequest?: (protocol.ITeamApplyRequest|null);

        /** Request teamRefuseRequest */
        teamRefuseRequest?: (protocol.ITeamRefuseRequest|null);

        /** Request battleFinishRequest */
        battleFinishRequest?: (protocol.IBattleFinishRequest|null);

        /** Request clientErrorRequest */
        clientErrorRequest?: (protocol.IClientErrorRequest|null);

        /** Request teamRobotAddRequest */
        teamRobotAddRequest?: (protocol.ITeamRobotAddRequest|null);

        /** Request teamRobotRemoveRequest */
        teamRobotRemoveRequest?: (protocol.ITeamRobotRemoveRequest|null);

        /** Request teamPosChangeRequest */
        teamPosChangeRequest?: (protocol.ITeamPosChangeRequest|null);

        /** Request battleReLoginRequest */
        battleReLoginRequest?: (protocol.IBattleReLoginRequest|null);

        /** Request battleFrameListRequest */
        battleFrameListRequest?: (protocol.IBattleFrameListRequest|null);

        /** Request heroBuyRequest */
        heroBuyRequest?: (protocol.IHeroBuyRequest|null);

        /** Request battleEndRequest */
        battleEndRequest?: (protocol.IBattleEndRequest|null);

        /** Request battleStartRequest */
        battleStartRequest?: (protocol.IBattleStartRequest|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRequest);

        /** Request loginRequest. */
        public loginRequest?: (protocol.ILoginRequest|null);

        /** Request battleSyncRequest. */
        public battleSyncRequest?: (protocol.IBattleSyncRequest|null);

        /** Request battleLoginRequest. */
        public battleLoginRequest?: (protocol.IBattleLoginRequest|null);

        /** Request battleLoadingRequest. */
        public battleLoadingRequest?: (protocol.IBattleLoadingRequest|null);

        /** Request teamCreateRequest. */
        public teamCreateRequest?: (protocol.ITeamCreateRequest|null);

        /** Request teamJoinRequest. */
        public teamJoinRequest?: (protocol.ITeamJoinRequest|null);

        /** Request teamApplyRequest. */
        public teamApplyRequest?: (protocol.ITeamApplyRequest|null);

        /** Request teamRefuseRequest. */
        public teamRefuseRequest?: (protocol.ITeamRefuseRequest|null);

        /** Request battleFinishRequest. */
        public battleFinishRequest?: (protocol.IBattleFinishRequest|null);

        /** Request clientErrorRequest. */
        public clientErrorRequest?: (protocol.IClientErrorRequest|null);

        /** Request teamRobotAddRequest. */
        public teamRobotAddRequest?: (protocol.ITeamRobotAddRequest|null);

        /** Request teamRobotRemoveRequest. */
        public teamRobotRemoveRequest?: (protocol.ITeamRobotRemoveRequest|null);

        /** Request teamPosChangeRequest. */
        public teamPosChangeRequest?: (protocol.ITeamPosChangeRequest|null);

        /** Request battleReLoginRequest. */
        public battleReLoginRequest?: (protocol.IBattleReLoginRequest|null);

        /** Request battleFrameListRequest. */
        public battleFrameListRequest?: (protocol.IBattleFrameListRequest|null);

        /** Request heroBuyRequest. */
        public heroBuyRequest?: (protocol.IHeroBuyRequest|null);

        /** Request battleEndRequest. */
        public battleEndRequest?: (protocol.IBattleEndRequest|null);

        /** Request battleStartRequest. */
        public battleStartRequest?: (protocol.IBattleStartRequest|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: protocol.IRequest): protocol.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link protocol.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link protocol.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): protocol.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response errcode */
        errcode?: (string|null);

        /** Response loginResponse */
        loginResponse?: (protocol.ILoginResponse|null);

        /** Response battleSyncResponse */
        battleSyncResponse?: (protocol.IBattleSyncResponse|null);

        /** Response battleLoadingResponse */
        battleLoadingResponse?: (protocol.IBattleLoadingResponse|null);

        /** Response battleJoinResponse */
        battleJoinResponse?: (protocol.IBattleJoinResponse|null);

        /** Response battleStatusResponse */
        battleStatusResponse?: (protocol.IBattleStatusResponse|null);

        /** Response teamListResponse */
        teamListResponse?: (protocol.ITeamListResponse|null);

        /** Response matchBattleInfoResponse */
        matchBattleInfoResponse?: (protocol.IMatchBattleInfoResponse|null);

        /** Response teamByApplyResponse */
        teamByApplyResponse?: (protocol.ITeamByApplyResponse|null);

        /** Response teamByRefuseResponse */
        teamByRefuseResponse?: (protocol.ITeamByRefuseResponse|null);

        /** Response noticeResponse */
        noticeResponse?: (protocol.INoticeResponse|null);

        /** Response heartbeatResponse */
        heartbeatResponse?: (protocol.IHeartbeatResponse|null);

        /** Response battleFrameListResponse */
        battleFrameListResponse?: (protocol.IBattleFrameListResponse|null);

        /** Response teamCreateResponse */
        teamCreateResponse?: (protocol.ITeamCreateResponse|null);

        /** Response heroBuyResponse */
        heroBuyResponse?: (protocol.IHeroBuyResponse|null);

        /** Response battleEndResponse */
        battleEndResponse?: (protocol.IBattleEndResponse|null);

        /** Response battleStartResponse */
        battleStartResponse?: (protocol.IBattleStartResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IResponse);

        /** Response errcode. */
        public errcode: string;

        /** Response loginResponse. */
        public loginResponse?: (protocol.ILoginResponse|null);

        /** Response battleSyncResponse. */
        public battleSyncResponse?: (protocol.IBattleSyncResponse|null);

        /** Response battleLoadingResponse. */
        public battleLoadingResponse?: (protocol.IBattleLoadingResponse|null);

        /** Response battleJoinResponse. */
        public battleJoinResponse?: (protocol.IBattleJoinResponse|null);

        /** Response battleStatusResponse. */
        public battleStatusResponse?: (protocol.IBattleStatusResponse|null);

        /** Response teamListResponse. */
        public teamListResponse?: (protocol.ITeamListResponse|null);

        /** Response matchBattleInfoResponse. */
        public matchBattleInfoResponse?: (protocol.IMatchBattleInfoResponse|null);

        /** Response teamByApplyResponse. */
        public teamByApplyResponse?: (protocol.ITeamByApplyResponse|null);

        /** Response teamByRefuseResponse. */
        public teamByRefuseResponse?: (protocol.ITeamByRefuseResponse|null);

        /** Response noticeResponse. */
        public noticeResponse?: (protocol.INoticeResponse|null);

        /** Response heartbeatResponse. */
        public heartbeatResponse?: (protocol.IHeartbeatResponse|null);

        /** Response battleFrameListResponse. */
        public battleFrameListResponse?: (protocol.IBattleFrameListResponse|null);

        /** Response teamCreateResponse. */
        public teamCreateResponse?: (protocol.ITeamCreateResponse|null);

        /** Response heroBuyResponse. */
        public heroBuyResponse?: (protocol.IHeroBuyResponse|null);

        /** Response battleEndResponse. */
        public battleEndResponse?: (protocol.IBattleEndResponse|null);

        /** Response battleStartResponse. */
        public battleStartResponse?: (protocol.IBattleStartResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: protocol.IResponse): protocol.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link protocol.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link protocol.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): protocol.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonUser. */
    interface ICommonUser {

        /** CommonUser headImage */
        headImage?: (string|null);

        /** CommonUser name */
        name?: (string|null);

        /** CommonUser gold */
        gold?: (number|null);

        /** CommonUser power */
        power?: (number|null);

        /** CommonUser diam */
        diam?: (number|null);

        /** CommonUser headBoxId */
        headBoxId?: (number|null);
    }

    /** Represents a CommonUser. */
    class CommonUser implements ICommonUser {

        /**
         * Constructs a new CommonUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonUser);

        /** CommonUser headImage. */
        public headImage: string;

        /** CommonUser name. */
        public name: string;

        /** CommonUser gold. */
        public gold: number;

        /** CommonUser power. */
        public power: number;

        /** CommonUser diam. */
        public diam: number;

        /** CommonUser headBoxId. */
        public headBoxId: number;

        /**
         * Creates a new CommonUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonUser instance
         */
        public static create(properties?: protocol.ICommonUser): protocol.CommonUser;

        /**
         * Encodes the specified CommonUser message. Does not implicitly {@link protocol.CommonUser.verify|verify} messages.
         * @param message CommonUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonUser message, length delimited. Does not implicitly {@link protocol.CommonUser.verify|verify} messages.
         * @param message CommonUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommonUser;

        /**
         * Decodes a CommonUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommonUser;

        /**
         * Verifies a CommonUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonUser
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonUser;

        /**
         * Creates a plain object from a CommonUser message. Also converts values to other types if specified.
         * @param message CommonUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLoadingRequest. */
    interface IBattleLoadingRequest {

        /** BattleLoadingRequest percent */
        percent?: (number|null);
    }

    /** Represents a BattleLoadingRequest. */
    class BattleLoadingRequest implements IBattleLoadingRequest {

        /**
         * Constructs a new BattleLoadingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleLoadingRequest);

        /** BattleLoadingRequest percent. */
        public percent: number;

        /**
         * Creates a new BattleLoadingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLoadingRequest instance
         */
        public static create(properties?: protocol.IBattleLoadingRequest): protocol.BattleLoadingRequest;

        /**
         * Encodes the specified BattleLoadingRequest message. Does not implicitly {@link protocol.BattleLoadingRequest.verify|verify} messages.
         * @param message BattleLoadingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleLoadingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLoadingRequest message, length delimited. Does not implicitly {@link protocol.BattleLoadingRequest.verify|verify} messages.
         * @param message BattleLoadingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleLoadingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLoadingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLoadingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleLoadingRequest;

        /**
         * Decodes a BattleLoadingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLoadingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleLoadingRequest;

        /**
         * Verifies a BattleLoadingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLoadingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLoadingRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleLoadingRequest;

        /**
         * Creates a plain object from a BattleLoadingRequest message. Also converts values to other types if specified.
         * @param message BattleLoadingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleLoadingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLoadingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLoadingResponse. */
    interface IBattleLoadingResponse {

        /** BattleLoadingResponse uid */
        uid?: (number|null);

        /** BattleLoadingResponse percent */
        percent?: (number|null);
    }

    /** Represents a BattleLoadingResponse. */
    class BattleLoadingResponse implements IBattleLoadingResponse {

        /**
         * Constructs a new BattleLoadingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleLoadingResponse);

        /** BattleLoadingResponse uid. */
        public uid: number;

        /** BattleLoadingResponse percent. */
        public percent: number;

        /**
         * Creates a new BattleLoadingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLoadingResponse instance
         */
        public static create(properties?: protocol.IBattleLoadingResponse): protocol.BattleLoadingResponse;

        /**
         * Encodes the specified BattleLoadingResponse message. Does not implicitly {@link protocol.BattleLoadingResponse.verify|verify} messages.
         * @param message BattleLoadingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleLoadingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLoadingResponse message, length delimited. Does not implicitly {@link protocol.BattleLoadingResponse.verify|verify} messages.
         * @param message BattleLoadingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleLoadingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLoadingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLoadingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleLoadingResponse;

        /**
         * Decodes a BattleLoadingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLoadingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleLoadingResponse;

        /**
         * Verifies a BattleLoadingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLoadingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLoadingResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleLoadingResponse;

        /**
         * Creates a plain object from a BattleLoadingResponse message. Also converts values to other types if specified.
         * @param message BattleLoadingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleLoadingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLoadingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleStatusResponse. */
    interface IBattleStatusResponse {

        /** BattleStatusResponse status */
        status?: (protocol.BATTLE_STATUS|null);

        /** BattleStatusResponse userList */
        userList?: (protocol.IBattleUser[]|null);

        /** BattleStatusResponse startTime */
        startTime?: (number|Long|null);

        /** BattleStatusResponse duration */
        duration?: (number|null);
    }

    /** Represents a BattleStatusResponse. */
    class BattleStatusResponse implements IBattleStatusResponse {

        /**
         * Constructs a new BattleStatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleStatusResponse);

        /** BattleStatusResponse status. */
        public status: protocol.BATTLE_STATUS;

        /** BattleStatusResponse userList. */
        public userList: protocol.IBattleUser[];

        /** BattleStatusResponse startTime. */
        public startTime: (number|Long);

        /** BattleStatusResponse duration. */
        public duration: number;

        /**
         * Creates a new BattleStatusResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleStatusResponse instance
         */
        public static create(properties?: protocol.IBattleStatusResponse): protocol.BattleStatusResponse;

        /**
         * Encodes the specified BattleStatusResponse message. Does not implicitly {@link protocol.BattleStatusResponse.verify|verify} messages.
         * @param message BattleStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleStatusResponse message, length delimited. Does not implicitly {@link protocol.BattleStatusResponse.verify|verify} messages.
         * @param message BattleStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleStatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleStatusResponse;

        /**
         * Decodes a BattleStatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleStatusResponse;

        /**
         * Verifies a BattleStatusResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleStatusResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleStatusResponse;

        /**
         * Creates a plain object from a BattleStatusResponse message. Also converts values to other types if specified.
         * @param message BattleStatusResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleStatusResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleJoinResponse. */
    interface IBattleJoinResponse {

        /** BattleJoinResponse battleId */
        battleId?: (number|Long|null);
    }

    /** Represents a BattleJoinResponse. */
    class BattleJoinResponse implements IBattleJoinResponse {

        /**
         * Constructs a new BattleJoinResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleJoinResponse);

        /** BattleJoinResponse battleId. */
        public battleId: (number|Long);

        /**
         * Creates a new BattleJoinResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleJoinResponse instance
         */
        public static create(properties?: protocol.IBattleJoinResponse): protocol.BattleJoinResponse;

        /**
         * Encodes the specified BattleJoinResponse message. Does not implicitly {@link protocol.BattleJoinResponse.verify|verify} messages.
         * @param message BattleJoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleJoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleJoinResponse message, length delimited. Does not implicitly {@link protocol.BattleJoinResponse.verify|verify} messages.
         * @param message BattleJoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleJoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleJoinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleJoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleJoinResponse;

        /**
         * Decodes a BattleJoinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleJoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleJoinResponse;

        /**
         * Verifies a BattleJoinResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleJoinResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleJoinResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleJoinResponse;

        /**
         * Creates a plain object from a BattleJoinResponse message. Also converts values to other types if specified.
         * @param message BattleJoinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleJoinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleJoinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLoginRequest. */
    interface IBattleLoginRequest {

        /** BattleLoginRequest battleId */
        battleId?: (number|Long|null);
    }

    /** Represents a BattleLoginRequest. */
    class BattleLoginRequest implements IBattleLoginRequest {

        /**
         * Constructs a new BattleLoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleLoginRequest);

        /** BattleLoginRequest battleId. */
        public battleId: (number|Long);

        /**
         * Creates a new BattleLoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLoginRequest instance
         */
        public static create(properties?: protocol.IBattleLoginRequest): protocol.BattleLoginRequest;

        /**
         * Encodes the specified BattleLoginRequest message. Does not implicitly {@link protocol.BattleLoginRequest.verify|verify} messages.
         * @param message BattleLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLoginRequest message, length delimited. Does not implicitly {@link protocol.BattleLoginRequest.verify|verify} messages.
         * @param message BattleLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleLoginRequest;

        /**
         * Decodes a BattleLoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleLoginRequest;

        /**
         * Verifies a BattleLoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLoginRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleLoginRequest;

        /**
         * Creates a plain object from a BattleLoginRequest message. Also converts values to other types if specified.
         * @param message BattleLoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleReLoginRequest. */
    interface IBattleReLoginRequest {

        /** BattleReLoginRequest battleId */
        battleId?: (number|Long|null);
    }

    /** Represents a BattleReLoginRequest. */
    class BattleReLoginRequest implements IBattleReLoginRequest {

        /**
         * Constructs a new BattleReLoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleReLoginRequest);

        /** BattleReLoginRequest battleId. */
        public battleId: (number|Long);

        /**
         * Creates a new BattleReLoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleReLoginRequest instance
         */
        public static create(properties?: protocol.IBattleReLoginRequest): protocol.BattleReLoginRequest;

        /**
         * Encodes the specified BattleReLoginRequest message. Does not implicitly {@link protocol.BattleReLoginRequest.verify|verify} messages.
         * @param message BattleReLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleReLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleReLoginRequest message, length delimited. Does not implicitly {@link protocol.BattleReLoginRequest.verify|verify} messages.
         * @param message BattleReLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleReLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleReLoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleReLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleReLoginRequest;

        /**
         * Decodes a BattleReLoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleReLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleReLoginRequest;

        /**
         * Verifies a BattleReLoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleReLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleReLoginRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleReLoginRequest;

        /**
         * Creates a plain object from a BattleReLoginRequest message. Also converts values to other types if specified.
         * @param message BattleReLoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleReLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleReLoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleFrameListRequest. */
    interface IBattleFrameListRequest {

        /** BattleFrameListRequest battleId */
        battleId?: (number|Long|null);

        /** BattleFrameListRequest startFrameId */
        startFrameId?: (number|null);

        /** BattleFrameListRequest limit */
        limit?: (number|null);
    }

    /** Represents a BattleFrameListRequest. */
    class BattleFrameListRequest implements IBattleFrameListRequest {

        /**
         * Constructs a new BattleFrameListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleFrameListRequest);

        /** BattleFrameListRequest battleId. */
        public battleId: (number|Long);

        /** BattleFrameListRequest startFrameId. */
        public startFrameId: number;

        /** BattleFrameListRequest limit. */
        public limit: number;

        /**
         * Creates a new BattleFrameListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleFrameListRequest instance
         */
        public static create(properties?: protocol.IBattleFrameListRequest): protocol.BattleFrameListRequest;

        /**
         * Encodes the specified BattleFrameListRequest message. Does not implicitly {@link protocol.BattleFrameListRequest.verify|verify} messages.
         * @param message BattleFrameListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleFrameListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleFrameListRequest message, length delimited. Does not implicitly {@link protocol.BattleFrameListRequest.verify|verify} messages.
         * @param message BattleFrameListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleFrameListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleFrameListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleFrameListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleFrameListRequest;

        /**
         * Decodes a BattleFrameListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleFrameListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleFrameListRequest;

        /**
         * Verifies a BattleFrameListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleFrameListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleFrameListRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleFrameListRequest;

        /**
         * Creates a plain object from a BattleFrameListRequest message. Also converts values to other types if specified.
         * @param message BattleFrameListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleFrameListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleFrameListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleFrameListResponse. */
    interface IBattleFrameListResponse {

        /** BattleFrameListResponse frameList */
        frameList?: (protocol.IBattleSyncResponse[]|null);

        /** BattleFrameListResponse isEnd */
        isEnd?: (boolean|null);
    }

    /** Represents a BattleFrameListResponse. */
    class BattleFrameListResponse implements IBattleFrameListResponse {

        /**
         * Constructs a new BattleFrameListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleFrameListResponse);

        /** BattleFrameListResponse frameList. */
        public frameList: protocol.IBattleSyncResponse[];

        /** BattleFrameListResponse isEnd. */
        public isEnd: boolean;

        /**
         * Creates a new BattleFrameListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleFrameListResponse instance
         */
        public static create(properties?: protocol.IBattleFrameListResponse): protocol.BattleFrameListResponse;

        /**
         * Encodes the specified BattleFrameListResponse message. Does not implicitly {@link protocol.BattleFrameListResponse.verify|verify} messages.
         * @param message BattleFrameListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleFrameListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleFrameListResponse message, length delimited. Does not implicitly {@link protocol.BattleFrameListResponse.verify|verify} messages.
         * @param message BattleFrameListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleFrameListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleFrameListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleFrameListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleFrameListResponse;

        /**
         * Decodes a BattleFrameListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleFrameListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleFrameListResponse;

        /**
         * Verifies a BattleFrameListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleFrameListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleFrameListResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleFrameListResponse;

        /**
         * Creates a plain object from a BattleFrameListResponse message. Also converts values to other types if specified.
         * @param message BattleFrameListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleFrameListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleFrameListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSyncRequest. */
    interface IBattleSyncRequest {

        /** BattleSyncRequest battleId */
        battleId?: (number|Long|null);

        /** BattleSyncRequest msgs */
        msgs?: (protocol.IBattleMsg[]|null);
    }

    /** Represents a BattleSyncRequest. */
    class BattleSyncRequest implements IBattleSyncRequest {

        /**
         * Constructs a new BattleSyncRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleSyncRequest);

        /** BattleSyncRequest battleId. */
        public battleId: (number|Long);

        /** BattleSyncRequest msgs. */
        public msgs: protocol.IBattleMsg[];

        /**
         * Creates a new BattleSyncRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSyncRequest instance
         */
        public static create(properties?: protocol.IBattleSyncRequest): protocol.BattleSyncRequest;

        /**
         * Encodes the specified BattleSyncRequest message. Does not implicitly {@link protocol.BattleSyncRequest.verify|verify} messages.
         * @param message BattleSyncRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleSyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleSyncRequest message, length delimited. Does not implicitly {@link protocol.BattleSyncRequest.verify|verify} messages.
         * @param message BattleSyncRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleSyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSyncRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSyncRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleSyncRequest;

        /**
         * Decodes a BattleSyncRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSyncRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleSyncRequest;

        /**
         * Verifies a BattleSyncRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSyncRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSyncRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleSyncRequest;

        /**
         * Creates a plain object from a BattleSyncRequest message. Also converts values to other types if specified.
         * @param message BattleSyncRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleSyncRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSyncRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSyncResponse. */
    interface IBattleSyncResponse {

        /** BattleSyncResponse msgs */
        msgs?: (protocol.IBattleMsg[]|null);

        /** BattleSyncResponse FrameId */
        FrameId?: (number|null);
    }

    /** Represents a BattleSyncResponse. */
    class BattleSyncResponse implements IBattleSyncResponse {

        /**
         * Constructs a new BattleSyncResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleSyncResponse);

        /** BattleSyncResponse msgs. */
        public msgs: protocol.IBattleMsg[];

        /** BattleSyncResponse FrameId. */
        public FrameId: number;

        /**
         * Creates a new BattleSyncResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSyncResponse instance
         */
        public static create(properties?: protocol.IBattleSyncResponse): protocol.BattleSyncResponse;

        /**
         * Encodes the specified BattleSyncResponse message. Does not implicitly {@link protocol.BattleSyncResponse.verify|verify} messages.
         * @param message BattleSyncResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleSyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleSyncResponse message, length delimited. Does not implicitly {@link protocol.BattleSyncResponse.verify|verify} messages.
         * @param message BattleSyncResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleSyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSyncResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSyncResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleSyncResponse;

        /**
         * Decodes a BattleSyncResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSyncResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleSyncResponse;

        /**
         * Verifies a BattleSyncResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSyncResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSyncResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleSyncResponse;

        /**
         * Creates a plain object from a BattleSyncResponse message. Also converts values to other types if specified.
         * @param message BattleSyncResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleSyncResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSyncResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest uid */
        uid?: (number|null);

        /** LoginRequest pid */
        pid?: (string|null);

        /** LoginRequest channel */
        channel?: (number|null);

        /** LoginRequest platformParams */
        platformParams?: (string|null);

        /** LoginRequest isReconnect */
        isReconnect?: (boolean|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginRequest);

        /** LoginRequest uid. */
        public uid: number;

        /** LoginRequest pid. */
        public pid: string;

        /** LoginRequest channel. */
        public channel: number;

        /** LoginRequest platformParams. */
        public platformParams: string;

        /** LoginRequest isReconnect. */
        public isReconnect: boolean;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: protocol.ILoginRequest): protocol.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse isNewUser */
        isNewUser?: (boolean|null);

        /** LoginResponse uid */
        uid?: (number|null);

        /** LoginResponse commonUser */
        commonUser?: (protocol.ICommonUser|null);

        /** LoginResponse now */
        now?: (number|Long|null);

        /** LoginResponse commonItemList */
        commonItemList?: (protocol.ICommonItem[]|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginResponse);

        /** LoginResponse isNewUser. */
        public isNewUser: boolean;

        /** LoginResponse uid. */
        public uid: number;

        /** LoginResponse commonUser. */
        public commonUser?: (protocol.ICommonUser|null);

        /** LoginResponse now. */
        public now: (number|Long);

        /** LoginResponse commonItemList. */
        public commonItemList: protocol.ICommonItem[];

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: protocol.ILoginResponse): protocol.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: (protocol.MSG|null);

        /** Message uid */
        uid?: (number|null);

        /** Message request */
        request?: (protocol.IRequest|null);

        /** Message response */
        response?: (protocol.IResponse|null);

        /** Message seq */
        seq?: (number|null);

        /** Message isVerify */
        isVerify?: (boolean|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMessage);

        /** Message type. */
        public type: protocol.MSG;

        /** Message uid. */
        public uid: number;

        /** Message request. */
        public request?: (protocol.IRequest|null);

        /** Message response. */
        public response?: (protocol.IResponse|null);

        /** Message seq. */
        public seq: number;

        /** Message isVerify. */
        public isVerify: boolean;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protocol.IMessage): protocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): protocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleMsg. */
    interface IBattleMsg {

        /** BattleMsg uid */
        uid?: (number|null);

        /** BattleMsg hId */
        hId?: (number|null);

        /** BattleMsg ctrl */
        ctrl?: (number|null);

        /** BattleMsg val */
        val?: (number|null);
    }

    /** Represents a BattleMsg. */
    class BattleMsg implements IBattleMsg {

        /**
         * Constructs a new BattleMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleMsg);

        /** BattleMsg uid. */
        public uid: number;

        /** BattleMsg hId. */
        public hId: number;

        /** BattleMsg ctrl. */
        public ctrl: number;

        /** BattleMsg val. */
        public val: number;

        /**
         * Creates a new BattleMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleMsg instance
         */
        public static create(properties?: protocol.IBattleMsg): protocol.BattleMsg;

        /**
         * Encodes the specified BattleMsg message. Does not implicitly {@link protocol.BattleMsg.verify|verify} messages.
         * @param message BattleMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleMsg message, length delimited. Does not implicitly {@link protocol.BattleMsg.verify|verify} messages.
         * @param message BattleMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleMsg;

        /**
         * Decodes a BattleMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleMsg;

        /**
         * Verifies a BattleMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleMsg;

        /**
         * Creates a plain object from a BattleMsg message. Also converts values to other types if specified.
         * @param message BattleMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleUser. */
    interface IBattleUser {

        /** BattleUser uid */
        uid?: (number|null);

        /** BattleUser status */
        status?: (protocol.BATTLE_STATUS|null);

        /** BattleUser percent */
        percent?: (number|null);
    }

    /** Represents a BattleUser. */
    class BattleUser implements IBattleUser {

        /**
         * Constructs a new BattleUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleUser);

        /** BattleUser uid. */
        public uid: number;

        /** BattleUser status. */
        public status: protocol.BATTLE_STATUS;

        /** BattleUser percent. */
        public percent: number;

        /**
         * Creates a new BattleUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleUser instance
         */
        public static create(properties?: protocol.IBattleUser): protocol.BattleUser;

        /**
         * Encodes the specified BattleUser message. Does not implicitly {@link protocol.BattleUser.verify|verify} messages.
         * @param message BattleUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleUser message, length delimited. Does not implicitly {@link protocol.BattleUser.verify|verify} messages.
         * @param message BattleUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleUser;

        /**
         * Decodes a BattleUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleUser;

        /**
         * Verifies a BattleUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleUser
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleUser;

        /**
         * Creates a plain object from a BattleUser message. Also converts values to other types if specified.
         * @param message BattleUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleData. */
    interface IBattleData {

        /** BattleData name */
        name?: (string|null);

        /** BattleData headImage */
        headImage?: (string|null);

        /** BattleData rate */
        rate?: (number|null);

        /** BattleData maxRankId */
        maxRankId?: (number|null);

        /** BattleData heroId */
        heroId?: (number|null);

        /** BattleData maxRankScore */
        maxRankScore?: (number|null);

        /** BattleData headBoxId */
        headBoxId?: (number|null);
    }

    /** Represents a BattleData. */
    class BattleData implements IBattleData {

        /**
         * Constructs a new BattleData.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleData);

        /** BattleData name. */
        public name: string;

        /** BattleData headImage. */
        public headImage: string;

        /** BattleData rate. */
        public rate: number;

        /** BattleData maxRankId. */
        public maxRankId: number;

        /** BattleData heroId. */
        public heroId: number;

        /** BattleData maxRankScore. */
        public maxRankScore: number;

        /** BattleData headBoxId. */
        public headBoxId: number;

        /**
         * Creates a new BattleData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleData instance
         */
        public static create(properties?: protocol.IBattleData): protocol.BattleData;

        /**
         * Encodes the specified BattleData message. Does not implicitly {@link protocol.BattleData.verify|verify} messages.
         * @param message BattleData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleData message, length delimited. Does not implicitly {@link protocol.BattleData.verify|verify} messages.
         * @param message BattleData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleData;

        /**
         * Decodes a BattleData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleData;

        /**
         * Verifies a BattleData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleData
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleData;

        /**
         * Creates a plain object from a BattleData message. Also converts values to other types if specified.
         * @param message BattleData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamUser. */
    interface ITeamUser {

        /** TeamUser user */
        user?: (protocol.ITeamBattleUser|null);

        /** TeamUser isReady */
        isReady?: (boolean|null);

        /** TeamUser isLeader */
        isLeader?: (boolean|null);
    }

    /** Represents a TeamUser. */
    class TeamUser implements ITeamUser {

        /**
         * Constructs a new TeamUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamUser);

        /** TeamUser user. */
        public user?: (protocol.ITeamBattleUser|null);

        /** TeamUser isReady. */
        public isReady: boolean;

        /** TeamUser isLeader. */
        public isLeader: boolean;

        /**
         * Creates a new TeamUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamUser instance
         */
        public static create(properties?: protocol.ITeamUser): protocol.TeamUser;

        /**
         * Encodes the specified TeamUser message. Does not implicitly {@link protocol.TeamUser.verify|verify} messages.
         * @param message TeamUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamUser message, length delimited. Does not implicitly {@link protocol.TeamUser.verify|verify} messages.
         * @param message TeamUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamUser;

        /**
         * Decodes a TeamUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamUser;

        /**
         * Verifies a TeamUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamUser
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamUser;

        /**
         * Creates a plain object from a TeamUser message. Also converts values to other types if specified.
         * @param message TeamUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamBattleUser. */
    interface ITeamBattleUser {

        /** TeamBattleUser uid */
        uid?: (number|null);

        /** TeamBattleUser isRobot */
        isRobot?: (boolean|null);

        /** TeamBattleUser battleData */
        battleData?: (protocol.IBattleData|null);

        /** TeamBattleUser tId */
        tId?: (number|null);

        /** TeamBattleUser pos */
        pos?: (number|null);
    }

    /** Represents a TeamBattleUser. */
    class TeamBattleUser implements ITeamBattleUser {

        /**
         * Constructs a new TeamBattleUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamBattleUser);

        /** TeamBattleUser uid. */
        public uid: number;

        /** TeamBattleUser isRobot. */
        public isRobot: boolean;

        /** TeamBattleUser battleData. */
        public battleData?: (protocol.IBattleData|null);

        /** TeamBattleUser tId. */
        public tId: number;

        /** TeamBattleUser pos. */
        public pos: number;

        /**
         * Creates a new TeamBattleUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamBattleUser instance
         */
        public static create(properties?: protocol.ITeamBattleUser): protocol.TeamBattleUser;

        /**
         * Encodes the specified TeamBattleUser message. Does not implicitly {@link protocol.TeamBattleUser.verify|verify} messages.
         * @param message TeamBattleUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamBattleUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamBattleUser message, length delimited. Does not implicitly {@link protocol.TeamBattleUser.verify|verify} messages.
         * @param message TeamBattleUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamBattleUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamBattleUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamBattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamBattleUser;

        /**
         * Decodes a TeamBattleUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamBattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamBattleUser;

        /**
         * Verifies a TeamBattleUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamBattleUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamBattleUser
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamBattleUser;

        /**
         * Creates a plain object from a TeamBattleUser message. Also converts values to other types if specified.
         * @param message TeamBattleUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamBattleUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamBattleUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BATTLE_STATUS enum. */
    enum BATTLE_STATUS {
        LOADING = 0,
        BEGIN = 1,
        END = 2
    }

    /** TEAM_TYPE enum. */
    enum TEAM_TYPE {
        NORMAL__ = 0,
        DIY = 1
    }

    /** Properties of a TeamListResponse. */
    interface ITeamListResponse {

        /** TeamListResponse userList */
        userList?: (protocol.ITeamUser[]|null);
    }

    /** Represents a TeamListResponse. */
    class TeamListResponse implements ITeamListResponse {

        /**
         * Constructs a new TeamListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamListResponse);

        /** TeamListResponse userList. */
        public userList: protocol.ITeamUser[];

        /**
         * Creates a new TeamListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamListResponse instance
         */
        public static create(properties?: protocol.ITeamListResponse): protocol.TeamListResponse;

        /**
         * Encodes the specified TeamListResponse message. Does not implicitly {@link protocol.TeamListResponse.verify|verify} messages.
         * @param message TeamListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamListResponse message, length delimited. Does not implicitly {@link protocol.TeamListResponse.verify|verify} messages.
         * @param message TeamListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamListResponse;

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamListResponse;

        /**
         * Verifies a TeamListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamListResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamListResponse;

        /**
         * Creates a plain object from a TeamListResponse message. Also converts values to other types if specified.
         * @param message TeamListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchBattleInfoResponse. */
    interface IMatchBattleInfoResponse {

        /** MatchBattleInfoResponse battleId */
        battleId?: (number|Long|null);

        /** MatchBattleInfoResponse ip */
        ip?: (string|null);

        /** MatchBattleInfoResponse port */
        port?: (number|null);

        /** MatchBattleInfoResponse userList */
        userList?: (protocol.ITeamBattleUser[]|null);

        /** MatchBattleInfoResponse battleType */
        battleType?: (protocol.BATTLE_TYPE|null);

        /** MatchBattleInfoResponse IsLimit */
        IsLimit?: (boolean|null);

        /** MatchBattleInfoResponse battleServerId */
        battleServerId?: (number|null);

        /** MatchBattleInfoResponse wsPort */
        wsPort?: (number|null);

        /** MatchBattleInfoResponse teamType */
        teamType?: (protocol.TEAM_TYPE|null);
    }

    /** Represents a MatchBattleInfoResponse. */
    class MatchBattleInfoResponse implements IMatchBattleInfoResponse {

        /**
         * Constructs a new MatchBattleInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMatchBattleInfoResponse);

        /** MatchBattleInfoResponse battleId. */
        public battleId: (number|Long);

        /** MatchBattleInfoResponse ip. */
        public ip: string;

        /** MatchBattleInfoResponse port. */
        public port: number;

        /** MatchBattleInfoResponse userList. */
        public userList: protocol.ITeamBattleUser[];

        /** MatchBattleInfoResponse battleType. */
        public battleType: protocol.BATTLE_TYPE;

        /** MatchBattleInfoResponse IsLimit. */
        public IsLimit: boolean;

        /** MatchBattleInfoResponse battleServerId. */
        public battleServerId: number;

        /** MatchBattleInfoResponse wsPort. */
        public wsPort: number;

        /** MatchBattleInfoResponse teamType. */
        public teamType: protocol.TEAM_TYPE;

        /**
         * Creates a new MatchBattleInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchBattleInfoResponse instance
         */
        public static create(properties?: protocol.IMatchBattleInfoResponse): protocol.MatchBattleInfoResponse;

        /**
         * Encodes the specified MatchBattleInfoResponse message. Does not implicitly {@link protocol.MatchBattleInfoResponse.verify|verify} messages.
         * @param message MatchBattleInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMatchBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchBattleInfoResponse message, length delimited. Does not implicitly {@link protocol.MatchBattleInfoResponse.verify|verify} messages.
         * @param message MatchBattleInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMatchBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchBattleInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchBattleInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.MatchBattleInfoResponse;

        /**
         * Decodes a MatchBattleInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchBattleInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.MatchBattleInfoResponse;

        /**
         * Verifies a MatchBattleInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchBattleInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchBattleInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.MatchBattleInfoResponse;

        /**
         * Creates a plain object from a MatchBattleInfoResponse message. Also converts values to other types if specified.
         * @param message MatchBattleInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MatchBattleInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchBattleInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BATTLE_TYPE enum. */
    enum BATTLE_TYPE {
        ALL = 0,
        CASUAL = 1,
        JUNIOR = 2,
        SENIOR = 3
    }

    /** ITEM_TYPE enum. */
    enum ITEM_TYPE {
        NONE = 0,
        DIAM = 1,
        GOLD = 2,
        POWER = 3,
        TOOL = 4,
        HERO = 5,
        MAX_RANK_SCORE = 10
    }

    /** Properties of a TeamCreateRequest. */
    interface ITeamCreateRequest {

        /** TeamCreateRequest battleType */
        battleType?: (protocol.BATTLE_TYPE|null);

        /** TeamCreateRequest teamType */
        teamType?: (protocol.TEAM_TYPE|null);

        /** TeamCreateRequest clientVersion */
        clientVersion?: (string|null);
    }

    /** Represents a TeamCreateRequest. */
    class TeamCreateRequest implements ITeamCreateRequest {

        /**
         * Constructs a new TeamCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamCreateRequest);

        /** TeamCreateRequest battleType. */
        public battleType: protocol.BATTLE_TYPE;

        /** TeamCreateRequest teamType. */
        public teamType: protocol.TEAM_TYPE;

        /** TeamCreateRequest clientVersion. */
        public clientVersion: string;

        /**
         * Creates a new TeamCreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamCreateRequest instance
         */
        public static create(properties?: protocol.ITeamCreateRequest): protocol.TeamCreateRequest;

        /**
         * Encodes the specified TeamCreateRequest message. Does not implicitly {@link protocol.TeamCreateRequest.verify|verify} messages.
         * @param message TeamCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamCreateRequest message, length delimited. Does not implicitly {@link protocol.TeamCreateRequest.verify|verify} messages.
         * @param message TeamCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamCreateRequest;

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamCreateRequest;

        /**
         * Verifies a TeamCreateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamCreateRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamCreateRequest;

        /**
         * Creates a plain object from a TeamCreateRequest message. Also converts values to other types if specified.
         * @param message TeamCreateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamCreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamCreateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamCreateResponse. */
    interface ITeamCreateResponse {

        /** TeamCreateResponse teamId */
        teamId?: (number|Long|null);
    }

    /** Represents a TeamCreateResponse. */
    class TeamCreateResponse implements ITeamCreateResponse {

        /**
         * Constructs a new TeamCreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamCreateResponse);

        /** TeamCreateResponse teamId. */
        public teamId: (number|Long);

        /**
         * Creates a new TeamCreateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamCreateResponse instance
         */
        public static create(properties?: protocol.ITeamCreateResponse): protocol.TeamCreateResponse;

        /**
         * Encodes the specified TeamCreateResponse message. Does not implicitly {@link protocol.TeamCreateResponse.verify|verify} messages.
         * @param message TeamCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamCreateResponse message, length delimited. Does not implicitly {@link protocol.TeamCreateResponse.verify|verify} messages.
         * @param message TeamCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamCreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamCreateResponse;

        /**
         * Decodes a TeamCreateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamCreateResponse;

        /**
         * Verifies a TeamCreateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamCreateResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamCreateResponse;

        /**
         * Creates a plain object from a TeamCreateResponse message. Also converts values to other types if specified.
         * @param message TeamCreateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamCreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamCreateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RANK_TYPE enum. */
    enum RANK_TYPE {
        NONE_ = 0,
        MAX_RANK = 1
    }

    /** Properties of a TeamJoinRequest. */
    interface ITeamJoinRequest {

        /** TeamJoinRequest teamId */
        teamId?: (number|Long|null);

        /** TeamJoinRequest clientVersion */
        clientVersion?: (string|null);
    }

    /** Represents a TeamJoinRequest. */
    class TeamJoinRequest implements ITeamJoinRequest {

        /**
         * Constructs a new TeamJoinRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamJoinRequest);

        /** TeamJoinRequest teamId. */
        public teamId: (number|Long);

        /** TeamJoinRequest clientVersion. */
        public clientVersion: string;

        /**
         * Creates a new TeamJoinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamJoinRequest instance
         */
        public static create(properties?: protocol.ITeamJoinRequest): protocol.TeamJoinRequest;

        /**
         * Encodes the specified TeamJoinRequest message. Does not implicitly {@link protocol.TeamJoinRequest.verify|verify} messages.
         * @param message TeamJoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamJoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamJoinRequest message, length delimited. Does not implicitly {@link protocol.TeamJoinRequest.verify|verify} messages.
         * @param message TeamJoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamJoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamJoinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamJoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamJoinRequest;

        /**
         * Decodes a TeamJoinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamJoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamJoinRequest;

        /**
         * Verifies a TeamJoinRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamJoinRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamJoinRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamJoinRequest;

        /**
         * Creates a plain object from a TeamJoinRequest message. Also converts values to other types if specified.
         * @param message TeamJoinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamJoinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamJoinRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamApplyRequest. */
    interface ITeamApplyRequest {

        /** TeamApplyRequest byApplyUid */
        byApplyUid?: (number|null);

        /** TeamApplyRequest teamId */
        teamId?: (number|Long|null);

        /** TeamApplyRequest battleType */
        battleType?: (protocol.BATTLE_TYPE|null);

        /** TeamApplyRequest teamType */
        teamType?: (protocol.TEAM_TYPE|null);
    }

    /** Represents a TeamApplyRequest. */
    class TeamApplyRequest implements ITeamApplyRequest {

        /**
         * Constructs a new TeamApplyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamApplyRequest);

        /** TeamApplyRequest byApplyUid. */
        public byApplyUid: number;

        /** TeamApplyRequest teamId. */
        public teamId: (number|Long);

        /** TeamApplyRequest battleType. */
        public battleType: protocol.BATTLE_TYPE;

        /** TeamApplyRequest teamType. */
        public teamType: protocol.TEAM_TYPE;

        /**
         * Creates a new TeamApplyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamApplyRequest instance
         */
        public static create(properties?: protocol.ITeamApplyRequest): protocol.TeamApplyRequest;

        /**
         * Encodes the specified TeamApplyRequest message. Does not implicitly {@link protocol.TeamApplyRequest.verify|verify} messages.
         * @param message TeamApplyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamApplyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamApplyRequest message, length delimited. Does not implicitly {@link protocol.TeamApplyRequest.verify|verify} messages.
         * @param message TeamApplyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamApplyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamApplyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamApplyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamApplyRequest;

        /**
         * Decodes a TeamApplyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamApplyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamApplyRequest;

        /**
         * Verifies a TeamApplyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamApplyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamApplyRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamApplyRequest;

        /**
         * Creates a plain object from a TeamApplyRequest message. Also converts values to other types if specified.
         * @param message TeamApplyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamApplyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamApplyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamByApplyResponse. */
    interface ITeamByApplyResponse {

        /** TeamByApplyResponse teamId */
        teamId?: (number|Long|null);

        /** TeamByApplyResponse battleType */
        battleType?: (protocol.BATTLE_TYPE|null);

        /** TeamByApplyResponse name */
        name?: (string|null);

        /** TeamByApplyResponse headImage */
        headImage?: (string|null);

        /** TeamByApplyResponse maxRankId */
        maxRankId?: (number|null);

        /** TeamByApplyResponse uid */
        uid?: (number|null);

        /** TeamByApplyResponse headBoxId */
        headBoxId?: (number|null);

        /** TeamByApplyResponse teamType */
        teamType?: (protocol.TEAM_TYPE|null);
    }

    /** Represents a TeamByApplyResponse. */
    class TeamByApplyResponse implements ITeamByApplyResponse {

        /**
         * Constructs a new TeamByApplyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamByApplyResponse);

        /** TeamByApplyResponse teamId. */
        public teamId: (number|Long);

        /** TeamByApplyResponse battleType. */
        public battleType: protocol.BATTLE_TYPE;

        /** TeamByApplyResponse name. */
        public name: string;

        /** TeamByApplyResponse headImage. */
        public headImage: string;

        /** TeamByApplyResponse maxRankId. */
        public maxRankId: number;

        /** TeamByApplyResponse uid. */
        public uid: number;

        /** TeamByApplyResponse headBoxId. */
        public headBoxId: number;

        /** TeamByApplyResponse teamType. */
        public teamType: protocol.TEAM_TYPE;

        /**
         * Creates a new TeamByApplyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamByApplyResponse instance
         */
        public static create(properties?: protocol.ITeamByApplyResponse): protocol.TeamByApplyResponse;

        /**
         * Encodes the specified TeamByApplyResponse message. Does not implicitly {@link protocol.TeamByApplyResponse.verify|verify} messages.
         * @param message TeamByApplyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamByApplyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamByApplyResponse message, length delimited. Does not implicitly {@link protocol.TeamByApplyResponse.verify|verify} messages.
         * @param message TeamByApplyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamByApplyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamByApplyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamByApplyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamByApplyResponse;

        /**
         * Decodes a TeamByApplyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamByApplyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamByApplyResponse;

        /**
         * Verifies a TeamByApplyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamByApplyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamByApplyResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamByApplyResponse;

        /**
         * Creates a plain object from a TeamByApplyResponse message. Also converts values to other types if specified.
         * @param message TeamByApplyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamByApplyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamByApplyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamRefuseRequest. */
    interface ITeamRefuseRequest {

        /** TeamRefuseRequest applyUid */
        applyUid?: (number|null);

        /** TeamRefuseRequest teamId */
        teamId?: (number|Long|null);
    }

    /** Represents a TeamRefuseRequest. */
    class TeamRefuseRequest implements ITeamRefuseRequest {

        /**
         * Constructs a new TeamRefuseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamRefuseRequest);

        /** TeamRefuseRequest applyUid. */
        public applyUid: number;

        /** TeamRefuseRequest teamId. */
        public teamId: (number|Long);

        /**
         * Creates a new TeamRefuseRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamRefuseRequest instance
         */
        public static create(properties?: protocol.ITeamRefuseRequest): protocol.TeamRefuseRequest;

        /**
         * Encodes the specified TeamRefuseRequest message. Does not implicitly {@link protocol.TeamRefuseRequest.verify|verify} messages.
         * @param message TeamRefuseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamRefuseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamRefuseRequest message, length delimited. Does not implicitly {@link protocol.TeamRefuseRequest.verify|verify} messages.
         * @param message TeamRefuseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamRefuseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamRefuseRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamRefuseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamRefuseRequest;

        /**
         * Decodes a TeamRefuseRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamRefuseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamRefuseRequest;

        /**
         * Verifies a TeamRefuseRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamRefuseRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamRefuseRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamRefuseRequest;

        /**
         * Creates a plain object from a TeamRefuseRequest message. Also converts values to other types if specified.
         * @param message TeamRefuseRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamRefuseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamRefuseRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamByRefuseResponse. */
    interface ITeamByRefuseResponse {

        /** TeamByRefuseResponse refuseUid */
        refuseUid?: (number|null);

        /** TeamByRefuseResponse refuseName */
        refuseName?: (string|null);
    }

    /** Represents a TeamByRefuseResponse. */
    class TeamByRefuseResponse implements ITeamByRefuseResponse {

        /**
         * Constructs a new TeamByRefuseResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamByRefuseResponse);

        /** TeamByRefuseResponse refuseUid. */
        public refuseUid: number;

        /** TeamByRefuseResponse refuseName. */
        public refuseName: string;

        /**
         * Creates a new TeamByRefuseResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamByRefuseResponse instance
         */
        public static create(properties?: protocol.ITeamByRefuseResponse): protocol.TeamByRefuseResponse;

        /**
         * Encodes the specified TeamByRefuseResponse message. Does not implicitly {@link protocol.TeamByRefuseResponse.verify|verify} messages.
         * @param message TeamByRefuseResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamByRefuseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamByRefuseResponse message, length delimited. Does not implicitly {@link protocol.TeamByRefuseResponse.verify|verify} messages.
         * @param message TeamByRefuseResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamByRefuseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamByRefuseResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamByRefuseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamByRefuseResponse;

        /**
         * Decodes a TeamByRefuseResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamByRefuseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamByRefuseResponse;

        /**
         * Verifies a TeamByRefuseResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamByRefuseResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamByRefuseResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamByRefuseResponse;

        /**
         * Creates a plain object from a TeamByRefuseResponse message. Also converts values to other types if specified.
         * @param message TeamByRefuseResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamByRefuseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamByRefuseResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ONLINE_STATUS enum. */
    enum ONLINE_STATUS {
        OFFLINE = 0,
        ONLINE = 1,
        TEAMING = 2,
        BATTLING = 3
    }

    /** Properties of a BattleFinishRequest. */
    interface IBattleFinishRequest {

        /** BattleFinishRequest battleId */
        battleId?: (number|Long|null);
    }

    /** Represents a BattleFinishRequest. */
    class BattleFinishRequest implements IBattleFinishRequest {

        /**
         * Constructs a new BattleFinishRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleFinishRequest);

        /** BattleFinishRequest battleId. */
        public battleId: (number|Long);

        /**
         * Creates a new BattleFinishRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleFinishRequest instance
         */
        public static create(properties?: protocol.IBattleFinishRequest): protocol.BattleFinishRequest;

        /**
         * Encodes the specified BattleFinishRequest message. Does not implicitly {@link protocol.BattleFinishRequest.verify|verify} messages.
         * @param message BattleFinishRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleFinishRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleFinishRequest message, length delimited. Does not implicitly {@link protocol.BattleFinishRequest.verify|verify} messages.
         * @param message BattleFinishRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleFinishRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleFinishRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleFinishRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleFinishRequest;

        /**
         * Decodes a BattleFinishRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleFinishRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleFinishRequest;

        /**
         * Verifies a BattleFinishRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleFinishRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleFinishRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleFinishRequest;

        /**
         * Creates a plain object from a BattleFinishRequest message. Also converts values to other types if specified.
         * @param message BattleFinishRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleFinishRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleFinishRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** NOTICE_KEY enum. */
    enum NOTICE_KEY {
        MAIL = 0
    }

    /** Properties of a CommonNotice. */
    interface ICommonNotice {

        /** CommonNotice noticeKey */
        noticeKey?: (protocol.NOTICE_KEY|null);

        /** CommonNotice state */
        state?: (boolean|null);
    }

    /** Represents a CommonNotice. */
    class CommonNotice implements ICommonNotice {

        /**
         * Constructs a new CommonNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonNotice);

        /** CommonNotice noticeKey. */
        public noticeKey: protocol.NOTICE_KEY;

        /** CommonNotice state. */
        public state: boolean;

        /**
         * Creates a new CommonNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonNotice instance
         */
        public static create(properties?: protocol.ICommonNotice): protocol.CommonNotice;

        /**
         * Encodes the specified CommonNotice message. Does not implicitly {@link protocol.CommonNotice.verify|verify} messages.
         * @param message CommonNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonNotice message, length delimited. Does not implicitly {@link protocol.CommonNotice.verify|verify} messages.
         * @param message CommonNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommonNotice;

        /**
         * Decodes a CommonNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommonNotice;

        /**
         * Verifies a CommonNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonNotice
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonNotice;

        /**
         * Creates a plain object from a CommonNotice message. Also converts values to other types if specified.
         * @param message CommonNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoticeResponse. */
    interface INoticeResponse {

        /** NoticeResponse commonNoticeList */
        commonNoticeList?: (protocol.ICommonNotice[]|null);
    }

    /** Represents a NoticeResponse. */
    class NoticeResponse implements INoticeResponse {

        /**
         * Constructs a new NoticeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INoticeResponse);

        /** NoticeResponse commonNoticeList. */
        public commonNoticeList: protocol.ICommonNotice[];

        /**
         * Creates a new NoticeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticeResponse instance
         */
        public static create(properties?: protocol.INoticeResponse): protocol.NoticeResponse;

        /**
         * Encodes the specified NoticeResponse message. Does not implicitly {@link protocol.NoticeResponse.verify|verify} messages.
         * @param message NoticeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INoticeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoticeResponse message, length delimited. Does not implicitly {@link protocol.NoticeResponse.verify|verify} messages.
         * @param message NoticeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INoticeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoticeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NoticeResponse;

        /**
         * Decodes a NoticeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NoticeResponse;

        /**
         * Verifies a NoticeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoticeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoticeResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.NoticeResponse;

        /**
         * Creates a plain object from a NoticeResponse message. Also converts values to other types if specified.
         * @param message NoticeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NoticeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoticeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientErrorRequest. */
    interface IClientErrorRequest {

        /** ClientErrorRequest code */
        code?: (string|null);
    }

    /** Represents a ClientErrorRequest. */
    class ClientErrorRequest implements IClientErrorRequest {

        /**
         * Constructs a new ClientErrorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IClientErrorRequest);

        /** ClientErrorRequest code. */
        public code: string;

        /**
         * Creates a new ClientErrorRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientErrorRequest instance
         */
        public static create(properties?: protocol.IClientErrorRequest): protocol.ClientErrorRequest;

        /**
         * Encodes the specified ClientErrorRequest message. Does not implicitly {@link protocol.ClientErrorRequest.verify|verify} messages.
         * @param message ClientErrorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IClientErrorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientErrorRequest message, length delimited. Does not implicitly {@link protocol.ClientErrorRequest.verify|verify} messages.
         * @param message ClientErrorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IClientErrorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientErrorRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ClientErrorRequest;

        /**
         * Decodes a ClientErrorRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ClientErrorRequest;

        /**
         * Verifies a ClientErrorRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientErrorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientErrorRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.ClientErrorRequest;

        /**
         * Creates a plain object from a ClientErrorRequest message. Also converts values to other types if specified.
         * @param message ClientErrorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ClientErrorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientErrorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartbeatResponse. */
    interface IHeartbeatResponse {

        /** HeartbeatResponse now */
        now?: (number|Long|null);
    }

    /** Represents a HeartbeatResponse. */
    class HeartbeatResponse implements IHeartbeatResponse {

        /**
         * Constructs a new HeartbeatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeartbeatResponse);

        /** HeartbeatResponse now. */
        public now: (number|Long);

        /**
         * Creates a new HeartbeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatResponse instance
         */
        public static create(properties?: protocol.IHeartbeatResponse): protocol.HeartbeatResponse;

        /**
         * Encodes the specified HeartbeatResponse message. Does not implicitly {@link protocol.HeartbeatResponse.verify|verify} messages.
         * @param message HeartbeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link protocol.HeartbeatResponse.verify|verify} messages.
         * @param message HeartbeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HeartbeatResponse;

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HeartbeatResponse;

        /**
         * Verifies a HeartbeatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeartbeatResponse;

        /**
         * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
         * @param message HeartbeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeartbeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamRobotAddRequest. */
    interface ITeamRobotAddRequest {

        /** TeamRobotAddRequest tId */
        tId?: (number|null);
    }

    /** Represents a TeamRobotAddRequest. */
    class TeamRobotAddRequest implements ITeamRobotAddRequest {

        /**
         * Constructs a new TeamRobotAddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamRobotAddRequest);

        /** TeamRobotAddRequest tId. */
        public tId: number;

        /**
         * Creates a new TeamRobotAddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamRobotAddRequest instance
         */
        public static create(properties?: protocol.ITeamRobotAddRequest): protocol.TeamRobotAddRequest;

        /**
         * Encodes the specified TeamRobotAddRequest message. Does not implicitly {@link protocol.TeamRobotAddRequest.verify|verify} messages.
         * @param message TeamRobotAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamRobotAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamRobotAddRequest message, length delimited. Does not implicitly {@link protocol.TeamRobotAddRequest.verify|verify} messages.
         * @param message TeamRobotAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamRobotAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamRobotAddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamRobotAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamRobotAddRequest;

        /**
         * Decodes a TeamRobotAddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamRobotAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamRobotAddRequest;

        /**
         * Verifies a TeamRobotAddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamRobotAddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamRobotAddRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamRobotAddRequest;

        /**
         * Creates a plain object from a TeamRobotAddRequest message. Also converts values to other types if specified.
         * @param message TeamRobotAddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamRobotAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamRobotAddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamRobotRemoveRequest. */
    interface ITeamRobotRemoveRequest {

        /** TeamRobotRemoveRequest tId */
        tId?: (number|null);

        /** TeamRobotRemoveRequest pos */
        pos?: (number|null);
    }

    /** Represents a TeamRobotRemoveRequest. */
    class TeamRobotRemoveRequest implements ITeamRobotRemoveRequest {

        /**
         * Constructs a new TeamRobotRemoveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamRobotRemoveRequest);

        /** TeamRobotRemoveRequest tId. */
        public tId: number;

        /** TeamRobotRemoveRequest pos. */
        public pos: number;

        /**
         * Creates a new TeamRobotRemoveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamRobotRemoveRequest instance
         */
        public static create(properties?: protocol.ITeamRobotRemoveRequest): protocol.TeamRobotRemoveRequest;

        /**
         * Encodes the specified TeamRobotRemoveRequest message. Does not implicitly {@link protocol.TeamRobotRemoveRequest.verify|verify} messages.
         * @param message TeamRobotRemoveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamRobotRemoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamRobotRemoveRequest message, length delimited. Does not implicitly {@link protocol.TeamRobotRemoveRequest.verify|verify} messages.
         * @param message TeamRobotRemoveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamRobotRemoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamRobotRemoveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamRobotRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamRobotRemoveRequest;

        /**
         * Decodes a TeamRobotRemoveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamRobotRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamRobotRemoveRequest;

        /**
         * Verifies a TeamRobotRemoveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamRobotRemoveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamRobotRemoveRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamRobotRemoveRequest;

        /**
         * Creates a plain object from a TeamRobotRemoveRequest message. Also converts values to other types if specified.
         * @param message TeamRobotRemoveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamRobotRemoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamRobotRemoveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TeamPosChangeRequest. */
    interface ITeamPosChangeRequest {

        /** TeamPosChangeRequest tId */
        tId?: (number|null);

        /** TeamPosChangeRequest pos */
        pos?: (number|null);
    }

    /** Represents a TeamPosChangeRequest. */
    class TeamPosChangeRequest implements ITeamPosChangeRequest {

        /**
         * Constructs a new TeamPosChangeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITeamPosChangeRequest);

        /** TeamPosChangeRequest tId. */
        public tId: number;

        /** TeamPosChangeRequest pos. */
        public pos: number;

        /**
         * Creates a new TeamPosChangeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamPosChangeRequest instance
         */
        public static create(properties?: protocol.ITeamPosChangeRequest): protocol.TeamPosChangeRequest;

        /**
         * Encodes the specified TeamPosChangeRequest message. Does not implicitly {@link protocol.TeamPosChangeRequest.verify|verify} messages.
         * @param message TeamPosChangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITeamPosChangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamPosChangeRequest message, length delimited. Does not implicitly {@link protocol.TeamPosChangeRequest.verify|verify} messages.
         * @param message TeamPosChangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITeamPosChangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamPosChangeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamPosChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TeamPosChangeRequest;

        /**
         * Decodes a TeamPosChangeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamPosChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TeamPosChangeRequest;

        /**
         * Verifies a TeamPosChangeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamPosChangeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamPosChangeRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TeamPosChangeRequest;

        /**
         * Creates a plain object from a TeamPosChangeRequest message. Also converts values to other types if specified.
         * @param message TeamPosChangeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TeamPosChangeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamPosChangeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonItem. */
    interface ICommonItem {

        /** CommonItem ItemType */
        ItemType?: (protocol.ITEM_TYPE|null);

        /** CommonItem ItemId */
        ItemId?: (number|null);

        /** CommonItem ItemNum */
        ItemNum?: (number|null);

        /** CommonItem Ext */
        Ext?: (number|Long|null);

        /** CommonItem BeforeItemType */
        BeforeItemType?: (protocol.ITEM_TYPE|null);

        /** CommonItem BeforeItemId */
        BeforeItemId?: (number|null);

        /** CommonItem BeforeItemNum */
        BeforeItemNum?: (number|null);
    }

    /** Represents a CommonItem. */
    class CommonItem implements ICommonItem {

        /**
         * Constructs a new CommonItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonItem);

        /** CommonItem ItemType. */
        public ItemType: protocol.ITEM_TYPE;

        /** CommonItem ItemId. */
        public ItemId: number;

        /** CommonItem ItemNum. */
        public ItemNum: number;

        /** CommonItem Ext. */
        public Ext: (number|Long);

        /** CommonItem BeforeItemType. */
        public BeforeItemType: protocol.ITEM_TYPE;

        /** CommonItem BeforeItemId. */
        public BeforeItemId: number;

        /** CommonItem BeforeItemNum. */
        public BeforeItemNum: number;

        /**
         * Creates a new CommonItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonItem instance
         */
        public static create(properties?: protocol.ICommonItem): protocol.CommonItem;

        /**
         * Encodes the specified CommonItem message. Does not implicitly {@link protocol.CommonItem.verify|verify} messages.
         * @param message CommonItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonItem message, length delimited. Does not implicitly {@link protocol.CommonItem.verify|verify} messages.
         * @param message CommonItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommonItem;

        /**
         * Decodes a CommonItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommonItem;

        /**
         * Verifies a CommonItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonItem
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonItem;

        /**
         * Creates a plain object from a CommonItem message. Also converts values to other types if specified.
         * @param message CommonItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonUpdate. */
    interface ICommonUpdate {

        /** CommonUpdate addItemList */
        addItemList?: (protocol.ICommonItem[]|null);

        /** CommonUpdate itemList */
        itemList?: (protocol.ICommonItem[]|null);
    }

    /** Represents a CommonUpdate. */
    class CommonUpdate implements ICommonUpdate {

        /**
         * Constructs a new CommonUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonUpdate);

        /** CommonUpdate addItemList. */
        public addItemList: protocol.ICommonItem[];

        /** CommonUpdate itemList. */
        public itemList: protocol.ICommonItem[];

        /**
         * Creates a new CommonUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonUpdate instance
         */
        public static create(properties?: protocol.ICommonUpdate): protocol.CommonUpdate;

        /**
         * Encodes the specified CommonUpdate message. Does not implicitly {@link protocol.CommonUpdate.verify|verify} messages.
         * @param message CommonUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonUpdate message, length delimited. Does not implicitly {@link protocol.CommonUpdate.verify|verify} messages.
         * @param message CommonUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommonUpdate;

        /**
         * Decodes a CommonUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommonUpdate;

        /**
         * Verifies a CommonUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonUpdate
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonUpdate;

        /**
         * Creates a plain object from a CommonUpdate message. Also converts values to other types if specified.
         * @param message CommonUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonHero. */
    interface ICommonHero {

        /** CommonHero HeroId */
        HeroId?: (number|null);

        /** CommonHero FightNum */
        FightNum?: (number|null);
    }

    /** Represents a CommonHero. */
    class CommonHero implements ICommonHero {

        /**
         * Constructs a new CommonHero.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonHero);

        /** CommonHero HeroId. */
        public HeroId: number;

        /** CommonHero FightNum. */
        public FightNum: number;

        /**
         * Creates a new CommonHero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonHero instance
         */
        public static create(properties?: protocol.ICommonHero): protocol.CommonHero;

        /**
         * Encodes the specified CommonHero message. Does not implicitly {@link protocol.CommonHero.verify|verify} messages.
         * @param message CommonHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonHero message, length delimited. Does not implicitly {@link protocol.CommonHero.verify|verify} messages.
         * @param message CommonHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonHero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommonHero;

        /**
         * Decodes a CommonHero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommonHero;

        /**
         * Verifies a CommonHero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonHero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonHero
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonHero;

        /**
         * Creates a plain object from a CommonHero message. Also converts values to other types if specified.
         * @param message CommonHero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonHero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonHero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroBuyRequest. */
    interface IHeroBuyRequest {

        /** HeroBuyRequest heroId */
        heroId?: (number|null);
    }

    /** Represents a HeroBuyRequest. */
    class HeroBuyRequest implements IHeroBuyRequest {

        /**
         * Constructs a new HeroBuyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroBuyRequest);

        /** HeroBuyRequest heroId. */
        public heroId: number;

        /**
         * Creates a new HeroBuyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroBuyRequest instance
         */
        public static create(properties?: protocol.IHeroBuyRequest): protocol.HeroBuyRequest;

        /**
         * Encodes the specified HeroBuyRequest message. Does not implicitly {@link protocol.HeroBuyRequest.verify|verify} messages.
         * @param message HeroBuyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroBuyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroBuyRequest message, length delimited. Does not implicitly {@link protocol.HeroBuyRequest.verify|verify} messages.
         * @param message HeroBuyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroBuyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroBuyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroBuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HeroBuyRequest;

        /**
         * Decodes a HeroBuyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroBuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HeroBuyRequest;

        /**
         * Verifies a HeroBuyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroBuyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroBuyRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroBuyRequest;

        /**
         * Creates a plain object from a HeroBuyRequest message. Also converts values to other types if specified.
         * @param message HeroBuyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroBuyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroBuyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroBuyResponse. */
    interface IHeroBuyResponse {

        /** HeroBuyResponse heroListUpdate */
        heroListUpdate?: (protocol.ICommonHero[]|null);

        /** HeroBuyResponse commonUpdate */
        commonUpdate?: (protocol.ICommonUpdate|null);
    }

    /** Represents a HeroBuyResponse. */
    class HeroBuyResponse implements IHeroBuyResponse {

        /**
         * Constructs a new HeroBuyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroBuyResponse);

        /** HeroBuyResponse heroListUpdate. */
        public heroListUpdate: protocol.ICommonHero[];

        /** HeroBuyResponse commonUpdate. */
        public commonUpdate?: (protocol.ICommonUpdate|null);

        /**
         * Creates a new HeroBuyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroBuyResponse instance
         */
        public static create(properties?: protocol.IHeroBuyResponse): protocol.HeroBuyResponse;

        /**
         * Encodes the specified HeroBuyResponse message. Does not implicitly {@link protocol.HeroBuyResponse.verify|verify} messages.
         * @param message HeroBuyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroBuyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroBuyResponse message, length delimited. Does not implicitly {@link protocol.HeroBuyResponse.verify|verify} messages.
         * @param message HeroBuyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroBuyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroBuyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroBuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HeroBuyResponse;

        /**
         * Decodes a HeroBuyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroBuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HeroBuyResponse;

        /**
         * Verifies a HeroBuyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroBuyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroBuyResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroBuyResponse;

        /**
         * Creates a plain object from a HeroBuyResponse message. Also converts values to other types if specified.
         * @param message HeroBuyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroBuyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroBuyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleEndRequest. */
    interface IBattleEndRequest {

        /** BattleEndRequest isWin */
        isWin?: (boolean|null);

        /** BattleEndRequest heroId */
        heroId?: (number|null);

        /** BattleEndRequest battleType */
        battleType?: (protocol.BATTLE_TYPE|null);

        /** BattleEndRequest teamType */
        teamType?: (protocol.TEAM_TYPE|null);

        /** BattleEndRequest syncState */
        syncState?: (number|null);

        /** BattleEndRequest skinId */
        skinId?: (number|null);
    }

    /** Represents a BattleEndRequest. */
    class BattleEndRequest implements IBattleEndRequest {

        /**
         * Constructs a new BattleEndRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleEndRequest);

        /** BattleEndRequest isWin. */
        public isWin: boolean;

        /** BattleEndRequest heroId. */
        public heroId: number;

        /** BattleEndRequest battleType. */
        public battleType: protocol.BATTLE_TYPE;

        /** BattleEndRequest teamType. */
        public teamType: protocol.TEAM_TYPE;

        /** BattleEndRequest syncState. */
        public syncState: number;

        /** BattleEndRequest skinId. */
        public skinId: number;

        /**
         * Creates a new BattleEndRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleEndRequest instance
         */
        public static create(properties?: protocol.IBattleEndRequest): protocol.BattleEndRequest;

        /**
         * Encodes the specified BattleEndRequest message. Does not implicitly {@link protocol.BattleEndRequest.verify|verify} messages.
         * @param message BattleEndRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleEndRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleEndRequest message, length delimited. Does not implicitly {@link protocol.BattleEndRequest.verify|verify} messages.
         * @param message BattleEndRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleEndRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleEndRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleEndRequest;

        /**
         * Decodes a BattleEndRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleEndRequest;

        /**
         * Verifies a BattleEndRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleEndRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleEndRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleEndRequest;

        /**
         * Creates a plain object from a BattleEndRequest message. Also converts values to other types if specified.
         * @param message BattleEndRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleEndRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleEndRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleEndResponse. */
    interface IBattleEndResponse {

        /** BattleEndResponse commonUpdate */
        commonUpdate?: (protocol.ICommonUpdate|null);

        /** BattleEndResponse heroListUpdate */
        heroListUpdate?: (protocol.ICommonHero[]|null);
    }

    /** Represents a BattleEndResponse. */
    class BattleEndResponse implements IBattleEndResponse {

        /**
         * Constructs a new BattleEndResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleEndResponse);

        /** BattleEndResponse commonUpdate. */
        public commonUpdate?: (protocol.ICommonUpdate|null);

        /** BattleEndResponse heroListUpdate. */
        public heroListUpdate: protocol.ICommonHero[];

        /**
         * Creates a new BattleEndResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleEndResponse instance
         */
        public static create(properties?: protocol.IBattleEndResponse): protocol.BattleEndResponse;

        /**
         * Encodes the specified BattleEndResponse message. Does not implicitly {@link protocol.BattleEndResponse.verify|verify} messages.
         * @param message BattleEndResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleEndResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleEndResponse message, length delimited. Does not implicitly {@link protocol.BattleEndResponse.verify|verify} messages.
         * @param message BattleEndResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleEndResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleEndResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleEndResponse;

        /**
         * Decodes a BattleEndResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleEndResponse;

        /**
         * Verifies a BattleEndResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleEndResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleEndResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleEndResponse;

        /**
         * Creates a plain object from a BattleEndResponse message. Also converts values to other types if specified.
         * @param message BattleEndResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleEndResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleEndResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleStartRequest. */
    interface IBattleStartRequest {

        /** BattleStartRequest battleId */
        battleId?: (number|Long|null);

        /** BattleStartRequest isBattleWithFriend */
        isBattleWithFriend?: (boolean|null);

        /** BattleStartRequest heroId */
        heroId?: (number|null);

        /** BattleStartRequest skinId */
        skinId?: (number|null);
    }

    /** Represents a BattleStartRequest. */
    class BattleStartRequest implements IBattleStartRequest {

        /**
         * Constructs a new BattleStartRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleStartRequest);

        /** BattleStartRequest battleId. */
        public battleId: (number|Long);

        /** BattleStartRequest isBattleWithFriend. */
        public isBattleWithFriend: boolean;

        /** BattleStartRequest heroId. */
        public heroId: number;

        /** BattleStartRequest skinId. */
        public skinId: number;

        /**
         * Creates a new BattleStartRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleStartRequest instance
         */
        public static create(properties?: protocol.IBattleStartRequest): protocol.BattleStartRequest;

        /**
         * Encodes the specified BattleStartRequest message. Does not implicitly {@link protocol.BattleStartRequest.verify|verify} messages.
         * @param message BattleStartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleStartRequest message, length delimited. Does not implicitly {@link protocol.BattleStartRequest.verify|verify} messages.
         * @param message BattleStartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleStartRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleStartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleStartRequest;

        /**
         * Decodes a BattleStartRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleStartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleStartRequest;

        /**
         * Verifies a BattleStartRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleStartRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleStartRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleStartRequest;

        /**
         * Creates a plain object from a BattleStartRequest message. Also converts values to other types if specified.
         * @param message BattleStartRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleStartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleStartRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleStartResponse. */
    interface IBattleStartResponse {

        /** BattleStartResponse commonUpdate */
        commonUpdate?: (protocol.ICommonUpdate|null);
    }

    /** Represents a BattleStartResponse. */
    class BattleStartResponse implements IBattleStartResponse {

        /**
         * Constructs a new BattleStartResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBattleStartResponse);

        /** BattleStartResponse commonUpdate. */
        public commonUpdate?: (protocol.ICommonUpdate|null);

        /**
         * Creates a new BattleStartResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleStartResponse instance
         */
        public static create(properties?: protocol.IBattleStartResponse): protocol.BattleStartResponse;

        /**
         * Encodes the specified BattleStartResponse message. Does not implicitly {@link protocol.BattleStartResponse.verify|verify} messages.
         * @param message BattleStartResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBattleStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleStartResponse message, length delimited. Does not implicitly {@link protocol.BattleStartResponse.verify|verify} messages.
         * @param message BattleStartResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBattleStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleStartResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleStartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BattleStartResponse;

        /**
         * Decodes a BattleStartResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleStartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BattleStartResponse;

        /**
         * Verifies a BattleStartResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleStartResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleStartResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BattleStartResponse;

        /**
         * Creates a plain object from a BattleStartResponse message. Also converts values to other types if specified.
         * @param message BattleStartResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BattleStartResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleStartResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
