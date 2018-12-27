/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    /**
     * MSG enum.
     * @name protocol.MSG
     * @enum {string}
     * @property {number} Default=0 Default value
     * @property {number} BattleLogin=1000 BattleLogin value
     * @property {number} BattleSync=1001 BattleSync value
     * @property {number} BattleTimeout=1002 BattleTimeout value
     * @property {number} BattleStatus=1003 BattleStatus value
     * @property {number} BattleLoading=1004 BattleLoading value
     * @property {number} BattleFinish=1005 BattleFinish value
     * @property {number} BattleHeartbeat=1006 BattleHeartbeat value
     * @property {number} BattleReLogin=1007 BattleReLogin value
     * @property {number} BattleFrameList=1008 BattleFrameList value
     * @property {number} BattleJoin=1009 BattleJoin value
     * @property {number} TeamExit=2001 TeamExit value
     * @property {number} TeamList=2002 TeamList value
     * @property {number} MatchBattleInfo=2003 MatchBattleInfo value
     * @property {number} TeamBeginMatch=2004 TeamBeginMatch value
     * @property {number} TeamDelMatch=2005 TeamDelMatch value
     * @property {number} TeamRobotAdd=2006 TeamRobotAdd value
     * @property {number} TeamRobotRemove=2007 TeamRobotRemove value
     * @property {number} TeamPosChange=2008 TeamPosChange value
     * @property {number} TeamReady=2009 TeamReady value
     * @property {number} TeamCreate=2010 TeamCreate value
     * @property {number} TeamApply=2011 TeamApply value
     * @property {number} TeamByApply=2012 TeamByApply value
     * @property {number} TeamJoin=2013 TeamJoin value
     * @property {number} TeamRefuse=2014 TeamRefuse value
     * @property {number} TeamByRefuse=2015 TeamByRefuse value
     * @property {number} Login=3000 Login value
     * @property {number} Kick=3002 Kick value
     * @property {number} Notice=3003 Notice value
     * @property {number} ClientError=3004 ClientError value
     * @property {number} Heartbeat=3005 Heartbeat value
     * @property {number} HeroBuy=3006 HeroBuy value
     * @property {number} BattleEnd=3007 BattleEnd value
     * @property {number} BattleStart=3008 BattleStart value
     */
    protocol.MSG = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1000] = "BattleLogin"] = 1000;
        values[valuesById[1001] = "BattleSync"] = 1001;
        values[valuesById[1002] = "BattleTimeout"] = 1002;
        values[valuesById[1003] = "BattleStatus"] = 1003;
        values[valuesById[1004] = "BattleLoading"] = 1004;
        values[valuesById[1005] = "BattleFinish"] = 1005;
        values[valuesById[1006] = "BattleHeartbeat"] = 1006;
        values[valuesById[1007] = "BattleReLogin"] = 1007;
        values[valuesById[1008] = "BattleFrameList"] = 1008;
        values[valuesById[1009] = "BattleJoin"] = 1009;
        values[valuesById[2001] = "TeamExit"] = 2001;
        values[valuesById[2002] = "TeamList"] = 2002;
        values[valuesById[2003] = "MatchBattleInfo"] = 2003;
        values[valuesById[2004] = "TeamBeginMatch"] = 2004;
        values[valuesById[2005] = "TeamDelMatch"] = 2005;
        values[valuesById[2006] = "TeamRobotAdd"] = 2006;
        values[valuesById[2007] = "TeamRobotRemove"] = 2007;
        values[valuesById[2008] = "TeamPosChange"] = 2008;
        values[valuesById[2009] = "TeamReady"] = 2009;
        values[valuesById[2010] = "TeamCreate"] = 2010;
        values[valuesById[2011] = "TeamApply"] = 2011;
        values[valuesById[2012] = "TeamByApply"] = 2012;
        values[valuesById[2013] = "TeamJoin"] = 2013;
        values[valuesById[2014] = "TeamRefuse"] = 2014;
        values[valuesById[2015] = "TeamByRefuse"] = 2015;
        values[valuesById[3000] = "Login"] = 3000;
        values[valuesById[3002] = "Kick"] = 3002;
        values[valuesById[3003] = "Notice"] = 3003;
        values[valuesById[3004] = "ClientError"] = 3004;
        values[valuesById[3005] = "Heartbeat"] = 3005;
        values[valuesById[3006] = "HeroBuy"] = 3006;
        values[valuesById[3007] = "BattleEnd"] = 3007;
        values[valuesById[3008] = "BattleStart"] = 3008;
        return values;
    })();

    protocol.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof protocol
         * @interface IRequest
         * @property {protocol.ILoginRequest|null} [loginRequest] Request loginRequest
         * @property {protocol.IBattleSyncRequest|null} [battleSyncRequest] Request battleSyncRequest
         * @property {protocol.IBattleLoginRequest|null} [battleLoginRequest] Request battleLoginRequest
         * @property {protocol.IBattleLoadingRequest|null} [battleLoadingRequest] Request battleLoadingRequest
         * @property {protocol.ITeamCreateRequest|null} [teamCreateRequest] Request teamCreateRequest
         * @property {protocol.ITeamJoinRequest|null} [teamJoinRequest] Request teamJoinRequest
         * @property {protocol.ITeamApplyRequest|null} [teamApplyRequest] Request teamApplyRequest
         * @property {protocol.ITeamRefuseRequest|null} [teamRefuseRequest] Request teamRefuseRequest
         * @property {protocol.IBattleFinishRequest|null} [battleFinishRequest] Request battleFinishRequest
         * @property {protocol.IClientErrorRequest|null} [clientErrorRequest] Request clientErrorRequest
         * @property {protocol.ITeamRobotAddRequest|null} [teamRobotAddRequest] Request teamRobotAddRequest
         * @property {protocol.ITeamRobotRemoveRequest|null} [teamRobotRemoveRequest] Request teamRobotRemoveRequest
         * @property {protocol.ITeamPosChangeRequest|null} [teamPosChangeRequest] Request teamPosChangeRequest
         * @property {protocol.IBattleReLoginRequest|null} [battleReLoginRequest] Request battleReLoginRequest
         * @property {protocol.IBattleFrameListRequest|null} [battleFrameListRequest] Request battleFrameListRequest
         * @property {protocol.IHeroBuyRequest|null} [heroBuyRequest] Request heroBuyRequest
         * @property {protocol.IBattleEndRequest|null} [battleEndRequest] Request battleEndRequest
         * @property {protocol.IBattleStartRequest|null} [battleStartRequest] Request battleStartRequest
         */

        /**
         * Constructs a new Request.
         * @memberof protocol
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {protocol.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request loginRequest.
         * @member {protocol.ILoginRequest|null|undefined} loginRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.loginRequest = null;

        /**
         * Request battleSyncRequest.
         * @member {protocol.IBattleSyncRequest|null|undefined} battleSyncRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleSyncRequest = null;

        /**
         * Request battleLoginRequest.
         * @member {protocol.IBattleLoginRequest|null|undefined} battleLoginRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleLoginRequest = null;

        /**
         * Request battleLoadingRequest.
         * @member {protocol.IBattleLoadingRequest|null|undefined} battleLoadingRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleLoadingRequest = null;

        /**
         * Request teamCreateRequest.
         * @member {protocol.ITeamCreateRequest|null|undefined} teamCreateRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamCreateRequest = null;

        /**
         * Request teamJoinRequest.
         * @member {protocol.ITeamJoinRequest|null|undefined} teamJoinRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamJoinRequest = null;

        /**
         * Request teamApplyRequest.
         * @member {protocol.ITeamApplyRequest|null|undefined} teamApplyRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamApplyRequest = null;

        /**
         * Request teamRefuseRequest.
         * @member {protocol.ITeamRefuseRequest|null|undefined} teamRefuseRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamRefuseRequest = null;

        /**
         * Request battleFinishRequest.
         * @member {protocol.IBattleFinishRequest|null|undefined} battleFinishRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleFinishRequest = null;

        /**
         * Request clientErrorRequest.
         * @member {protocol.IClientErrorRequest|null|undefined} clientErrorRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.clientErrorRequest = null;

        /**
         * Request teamRobotAddRequest.
         * @member {protocol.ITeamRobotAddRequest|null|undefined} teamRobotAddRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamRobotAddRequest = null;

        /**
         * Request teamRobotRemoveRequest.
         * @member {protocol.ITeamRobotRemoveRequest|null|undefined} teamRobotRemoveRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamRobotRemoveRequest = null;

        /**
         * Request teamPosChangeRequest.
         * @member {protocol.ITeamPosChangeRequest|null|undefined} teamPosChangeRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.teamPosChangeRequest = null;

        /**
         * Request battleReLoginRequest.
         * @member {protocol.IBattleReLoginRequest|null|undefined} battleReLoginRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleReLoginRequest = null;

        /**
         * Request battleFrameListRequest.
         * @member {protocol.IBattleFrameListRequest|null|undefined} battleFrameListRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleFrameListRequest = null;

        /**
         * Request heroBuyRequest.
         * @member {protocol.IHeroBuyRequest|null|undefined} heroBuyRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.heroBuyRequest = null;

        /**
         * Request battleEndRequest.
         * @member {protocol.IBattleEndRequest|null|undefined} battleEndRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleEndRequest = null;

        /**
         * Request battleStartRequest.
         * @member {protocol.IBattleStartRequest|null|undefined} battleStartRequest
         * @memberof protocol.Request
         * @instance
         */
        Request.prototype.battleStartRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof protocol.Request
         * @static
         * @param {protocol.IRequest=} [properties] Properties to set
         * @returns {protocol.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link protocol.Request.verify|verify} messages.
         * @function encode
         * @memberof protocol.Request
         * @static
         * @param {protocol.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                $root.protocol.LoginRequest.encode(message.loginRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.battleSyncRequest != null && message.hasOwnProperty("battleSyncRequest"))
                $root.protocol.BattleSyncRequest.encode(message.battleSyncRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.battleLoginRequest != null && message.hasOwnProperty("battleLoginRequest"))
                $root.protocol.BattleLoginRequest.encode(message.battleLoginRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.battleLoadingRequest != null && message.hasOwnProperty("battleLoadingRequest"))
                $root.protocol.BattleLoadingRequest.encode(message.battleLoadingRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.teamCreateRequest != null && message.hasOwnProperty("teamCreateRequest"))
                $root.protocol.TeamCreateRequest.encode(message.teamCreateRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.teamJoinRequest != null && message.hasOwnProperty("teamJoinRequest"))
                $root.protocol.TeamJoinRequest.encode(message.teamJoinRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.teamApplyRequest != null && message.hasOwnProperty("teamApplyRequest"))
                $root.protocol.TeamApplyRequest.encode(message.teamApplyRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.teamRefuseRequest != null && message.hasOwnProperty("teamRefuseRequest"))
                $root.protocol.TeamRefuseRequest.encode(message.teamRefuseRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.battleFinishRequest != null && message.hasOwnProperty("battleFinishRequest"))
                $root.protocol.BattleFinishRequest.encode(message.battleFinishRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.clientErrorRequest != null && message.hasOwnProperty("clientErrorRequest"))
                $root.protocol.ClientErrorRequest.encode(message.clientErrorRequest, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.teamRobotAddRequest != null && message.hasOwnProperty("teamRobotAddRequest"))
                $root.protocol.TeamRobotAddRequest.encode(message.teamRobotAddRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.teamRobotRemoveRequest != null && message.hasOwnProperty("teamRobotRemoveRequest"))
                $root.protocol.TeamRobotRemoveRequest.encode(message.teamRobotRemoveRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.teamPosChangeRequest != null && message.hasOwnProperty("teamPosChangeRequest"))
                $root.protocol.TeamPosChangeRequest.encode(message.teamPosChangeRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.battleReLoginRequest != null && message.hasOwnProperty("battleReLoginRequest"))
                $root.protocol.BattleReLoginRequest.encode(message.battleReLoginRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.battleFrameListRequest != null && message.hasOwnProperty("battleFrameListRequest"))
                $root.protocol.BattleFrameListRequest.encode(message.battleFrameListRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.heroBuyRequest != null && message.hasOwnProperty("heroBuyRequest"))
                $root.protocol.HeroBuyRequest.encode(message.heroBuyRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.battleEndRequest != null && message.hasOwnProperty("battleEndRequest"))
                $root.protocol.BattleEndRequest.encode(message.battleEndRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.battleStartRequest != null && message.hasOwnProperty("battleStartRequest"))
                $root.protocol.BattleStartRequest.encode(message.battleStartRequest, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link protocol.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Request
         * @static
         * @param {protocol.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginRequest = $root.protocol.LoginRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.battleSyncRequest = $root.protocol.BattleSyncRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.battleLoginRequest = $root.protocol.BattleLoginRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.battleLoadingRequest = $root.protocol.BattleLoadingRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.teamCreateRequest = $root.protocol.TeamCreateRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.teamJoinRequest = $root.protocol.TeamJoinRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.teamApplyRequest = $root.protocol.TeamApplyRequest.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.teamRefuseRequest = $root.protocol.TeamRefuseRequest.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.battleFinishRequest = $root.protocol.BattleFinishRequest.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.clientErrorRequest = $root.protocol.ClientErrorRequest.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.teamRobotAddRequest = $root.protocol.TeamRobotAddRequest.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.teamRobotRemoveRequest = $root.protocol.TeamRobotRemoveRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.teamPosChangeRequest = $root.protocol.TeamPosChangeRequest.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.battleReLoginRequest = $root.protocol.BattleReLoginRequest.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.battleFrameListRequest = $root.protocol.BattleFrameListRequest.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.heroBuyRequest = $root.protocol.HeroBuyRequest.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.battleEndRequest = $root.protocol.BattleEndRequest.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.battleStartRequest = $root.protocol.BattleStartRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof protocol.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
                var error = $root.protocol.LoginRequest.verify(message.loginRequest);
                if (error)
                    return "loginRequest." + error;
            }
            if (message.battleSyncRequest != null && message.hasOwnProperty("battleSyncRequest")) {
                var error = $root.protocol.BattleSyncRequest.verify(message.battleSyncRequest);
                if (error)
                    return "battleSyncRequest." + error;
            }
            if (message.battleLoginRequest != null && message.hasOwnProperty("battleLoginRequest")) {
                var error = $root.protocol.BattleLoginRequest.verify(message.battleLoginRequest);
                if (error)
                    return "battleLoginRequest." + error;
            }
            if (message.battleLoadingRequest != null && message.hasOwnProperty("battleLoadingRequest")) {
                var error = $root.protocol.BattleLoadingRequest.verify(message.battleLoadingRequest);
                if (error)
                    return "battleLoadingRequest." + error;
            }
            if (message.teamCreateRequest != null && message.hasOwnProperty("teamCreateRequest")) {
                var error = $root.protocol.TeamCreateRequest.verify(message.teamCreateRequest);
                if (error)
                    return "teamCreateRequest." + error;
            }
            if (message.teamJoinRequest != null && message.hasOwnProperty("teamJoinRequest")) {
                var error = $root.protocol.TeamJoinRequest.verify(message.teamJoinRequest);
                if (error)
                    return "teamJoinRequest." + error;
            }
            if (message.teamApplyRequest != null && message.hasOwnProperty("teamApplyRequest")) {
                var error = $root.protocol.TeamApplyRequest.verify(message.teamApplyRequest);
                if (error)
                    return "teamApplyRequest." + error;
            }
            if (message.teamRefuseRequest != null && message.hasOwnProperty("teamRefuseRequest")) {
                var error = $root.protocol.TeamRefuseRequest.verify(message.teamRefuseRequest);
                if (error)
                    return "teamRefuseRequest." + error;
            }
            if (message.battleFinishRequest != null && message.hasOwnProperty("battleFinishRequest")) {
                var error = $root.protocol.BattleFinishRequest.verify(message.battleFinishRequest);
                if (error)
                    return "battleFinishRequest." + error;
            }
            if (message.clientErrorRequest != null && message.hasOwnProperty("clientErrorRequest")) {
                var error = $root.protocol.ClientErrorRequest.verify(message.clientErrorRequest);
                if (error)
                    return "clientErrorRequest." + error;
            }
            if (message.teamRobotAddRequest != null && message.hasOwnProperty("teamRobotAddRequest")) {
                var error = $root.protocol.TeamRobotAddRequest.verify(message.teamRobotAddRequest);
                if (error)
                    return "teamRobotAddRequest." + error;
            }
            if (message.teamRobotRemoveRequest != null && message.hasOwnProperty("teamRobotRemoveRequest")) {
                var error = $root.protocol.TeamRobotRemoveRequest.verify(message.teamRobotRemoveRequest);
                if (error)
                    return "teamRobotRemoveRequest." + error;
            }
            if (message.teamPosChangeRequest != null && message.hasOwnProperty("teamPosChangeRequest")) {
                var error = $root.protocol.TeamPosChangeRequest.verify(message.teamPosChangeRequest);
                if (error)
                    return "teamPosChangeRequest." + error;
            }
            if (message.battleReLoginRequest != null && message.hasOwnProperty("battleReLoginRequest")) {
                var error = $root.protocol.BattleReLoginRequest.verify(message.battleReLoginRequest);
                if (error)
                    return "battleReLoginRequest." + error;
            }
            if (message.battleFrameListRequest != null && message.hasOwnProperty("battleFrameListRequest")) {
                var error = $root.protocol.BattleFrameListRequest.verify(message.battleFrameListRequest);
                if (error)
                    return "battleFrameListRequest." + error;
            }
            if (message.heroBuyRequest != null && message.hasOwnProperty("heroBuyRequest")) {
                var error = $root.protocol.HeroBuyRequest.verify(message.heroBuyRequest);
                if (error)
                    return "heroBuyRequest." + error;
            }
            if (message.battleEndRequest != null && message.hasOwnProperty("battleEndRequest")) {
                var error = $root.protocol.BattleEndRequest.verify(message.battleEndRequest);
                if (error)
                    return "battleEndRequest." + error;
            }
            if (message.battleStartRequest != null && message.hasOwnProperty("battleStartRequest")) {
                var error = $root.protocol.BattleStartRequest.verify(message.battleStartRequest);
                if (error)
                    return "battleStartRequest." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Request)
                return object;
            var message = new $root.protocol.Request();
            if (object.loginRequest != null) {
                if (typeof object.loginRequest !== "object")
                    throw TypeError(".protocol.Request.loginRequest: object expected");
                message.loginRequest = $root.protocol.LoginRequest.fromObject(object.loginRequest);
            }
            if (object.battleSyncRequest != null) {
                if (typeof object.battleSyncRequest !== "object")
                    throw TypeError(".protocol.Request.battleSyncRequest: object expected");
                message.battleSyncRequest = $root.protocol.BattleSyncRequest.fromObject(object.battleSyncRequest);
            }
            if (object.battleLoginRequest != null) {
                if (typeof object.battleLoginRequest !== "object")
                    throw TypeError(".protocol.Request.battleLoginRequest: object expected");
                message.battleLoginRequest = $root.protocol.BattleLoginRequest.fromObject(object.battleLoginRequest);
            }
            if (object.battleLoadingRequest != null) {
                if (typeof object.battleLoadingRequest !== "object")
                    throw TypeError(".protocol.Request.battleLoadingRequest: object expected");
                message.battleLoadingRequest = $root.protocol.BattleLoadingRequest.fromObject(object.battleLoadingRequest);
            }
            if (object.teamCreateRequest != null) {
                if (typeof object.teamCreateRequest !== "object")
                    throw TypeError(".protocol.Request.teamCreateRequest: object expected");
                message.teamCreateRequest = $root.protocol.TeamCreateRequest.fromObject(object.teamCreateRequest);
            }
            if (object.teamJoinRequest != null) {
                if (typeof object.teamJoinRequest !== "object")
                    throw TypeError(".protocol.Request.teamJoinRequest: object expected");
                message.teamJoinRequest = $root.protocol.TeamJoinRequest.fromObject(object.teamJoinRequest);
            }
            if (object.teamApplyRequest != null) {
                if (typeof object.teamApplyRequest !== "object")
                    throw TypeError(".protocol.Request.teamApplyRequest: object expected");
                message.teamApplyRequest = $root.protocol.TeamApplyRequest.fromObject(object.teamApplyRequest);
            }
            if (object.teamRefuseRequest != null) {
                if (typeof object.teamRefuseRequest !== "object")
                    throw TypeError(".protocol.Request.teamRefuseRequest: object expected");
                message.teamRefuseRequest = $root.protocol.TeamRefuseRequest.fromObject(object.teamRefuseRequest);
            }
            if (object.battleFinishRequest != null) {
                if (typeof object.battleFinishRequest !== "object")
                    throw TypeError(".protocol.Request.battleFinishRequest: object expected");
                message.battleFinishRequest = $root.protocol.BattleFinishRequest.fromObject(object.battleFinishRequest);
            }
            if (object.clientErrorRequest != null) {
                if (typeof object.clientErrorRequest !== "object")
                    throw TypeError(".protocol.Request.clientErrorRequest: object expected");
                message.clientErrorRequest = $root.protocol.ClientErrorRequest.fromObject(object.clientErrorRequest);
            }
            if (object.teamRobotAddRequest != null) {
                if (typeof object.teamRobotAddRequest !== "object")
                    throw TypeError(".protocol.Request.teamRobotAddRequest: object expected");
                message.teamRobotAddRequest = $root.protocol.TeamRobotAddRequest.fromObject(object.teamRobotAddRequest);
            }
            if (object.teamRobotRemoveRequest != null) {
                if (typeof object.teamRobotRemoveRequest !== "object")
                    throw TypeError(".protocol.Request.teamRobotRemoveRequest: object expected");
                message.teamRobotRemoveRequest = $root.protocol.TeamRobotRemoveRequest.fromObject(object.teamRobotRemoveRequest);
            }
            if (object.teamPosChangeRequest != null) {
                if (typeof object.teamPosChangeRequest !== "object")
                    throw TypeError(".protocol.Request.teamPosChangeRequest: object expected");
                message.teamPosChangeRequest = $root.protocol.TeamPosChangeRequest.fromObject(object.teamPosChangeRequest);
            }
            if (object.battleReLoginRequest != null) {
                if (typeof object.battleReLoginRequest !== "object")
                    throw TypeError(".protocol.Request.battleReLoginRequest: object expected");
                message.battleReLoginRequest = $root.protocol.BattleReLoginRequest.fromObject(object.battleReLoginRequest);
            }
            if (object.battleFrameListRequest != null) {
                if (typeof object.battleFrameListRequest !== "object")
                    throw TypeError(".protocol.Request.battleFrameListRequest: object expected");
                message.battleFrameListRequest = $root.protocol.BattleFrameListRequest.fromObject(object.battleFrameListRequest);
            }
            if (object.heroBuyRequest != null) {
                if (typeof object.heroBuyRequest !== "object")
                    throw TypeError(".protocol.Request.heroBuyRequest: object expected");
                message.heroBuyRequest = $root.protocol.HeroBuyRequest.fromObject(object.heroBuyRequest);
            }
            if (object.battleEndRequest != null) {
                if (typeof object.battleEndRequest !== "object")
                    throw TypeError(".protocol.Request.battleEndRequest: object expected");
                message.battleEndRequest = $root.protocol.BattleEndRequest.fromObject(object.battleEndRequest);
            }
            if (object.battleStartRequest != null) {
                if (typeof object.battleStartRequest !== "object")
                    throw TypeError(".protocol.Request.battleStartRequest: object expected");
                message.battleStartRequest = $root.protocol.BattleStartRequest.fromObject(object.battleStartRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Request
         * @static
         * @param {protocol.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.loginRequest = null;
                object.battleSyncRequest = null;
                object.battleLoginRequest = null;
                object.battleLoadingRequest = null;
                object.teamCreateRequest = null;
                object.teamJoinRequest = null;
                object.teamApplyRequest = null;
                object.teamRefuseRequest = null;
                object.battleFinishRequest = null;
                object.clientErrorRequest = null;
                object.teamRobotAddRequest = null;
                object.teamRobotRemoveRequest = null;
                object.teamPosChangeRequest = null;
                object.battleReLoginRequest = null;
                object.battleFrameListRequest = null;
                object.heroBuyRequest = null;
                object.battleEndRequest = null;
                object.battleStartRequest = null;
            }
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                object.loginRequest = $root.protocol.LoginRequest.toObject(message.loginRequest, options);
            if (message.battleSyncRequest != null && message.hasOwnProperty("battleSyncRequest"))
                object.battleSyncRequest = $root.protocol.BattleSyncRequest.toObject(message.battleSyncRequest, options);
            if (message.battleLoginRequest != null && message.hasOwnProperty("battleLoginRequest"))
                object.battleLoginRequest = $root.protocol.BattleLoginRequest.toObject(message.battleLoginRequest, options);
            if (message.battleLoadingRequest != null && message.hasOwnProperty("battleLoadingRequest"))
                object.battleLoadingRequest = $root.protocol.BattleLoadingRequest.toObject(message.battleLoadingRequest, options);
            if (message.teamCreateRequest != null && message.hasOwnProperty("teamCreateRequest"))
                object.teamCreateRequest = $root.protocol.TeamCreateRequest.toObject(message.teamCreateRequest, options);
            if (message.teamJoinRequest != null && message.hasOwnProperty("teamJoinRequest"))
                object.teamJoinRequest = $root.protocol.TeamJoinRequest.toObject(message.teamJoinRequest, options);
            if (message.teamApplyRequest != null && message.hasOwnProperty("teamApplyRequest"))
                object.teamApplyRequest = $root.protocol.TeamApplyRequest.toObject(message.teamApplyRequest, options);
            if (message.teamRefuseRequest != null && message.hasOwnProperty("teamRefuseRequest"))
                object.teamRefuseRequest = $root.protocol.TeamRefuseRequest.toObject(message.teamRefuseRequest, options);
            if (message.battleFinishRequest != null && message.hasOwnProperty("battleFinishRequest"))
                object.battleFinishRequest = $root.protocol.BattleFinishRequest.toObject(message.battleFinishRequest, options);
            if (message.clientErrorRequest != null && message.hasOwnProperty("clientErrorRequest"))
                object.clientErrorRequest = $root.protocol.ClientErrorRequest.toObject(message.clientErrorRequest, options);
            if (message.teamRobotAddRequest != null && message.hasOwnProperty("teamRobotAddRequest"))
                object.teamRobotAddRequest = $root.protocol.TeamRobotAddRequest.toObject(message.teamRobotAddRequest, options);
            if (message.teamRobotRemoveRequest != null && message.hasOwnProperty("teamRobotRemoveRequest"))
                object.teamRobotRemoveRequest = $root.protocol.TeamRobotRemoveRequest.toObject(message.teamRobotRemoveRequest, options);
            if (message.teamPosChangeRequest != null && message.hasOwnProperty("teamPosChangeRequest"))
                object.teamPosChangeRequest = $root.protocol.TeamPosChangeRequest.toObject(message.teamPosChangeRequest, options);
            if (message.battleReLoginRequest != null && message.hasOwnProperty("battleReLoginRequest"))
                object.battleReLoginRequest = $root.protocol.BattleReLoginRequest.toObject(message.battleReLoginRequest, options);
            if (message.battleFrameListRequest != null && message.hasOwnProperty("battleFrameListRequest"))
                object.battleFrameListRequest = $root.protocol.BattleFrameListRequest.toObject(message.battleFrameListRequest, options);
            if (message.heroBuyRequest != null && message.hasOwnProperty("heroBuyRequest"))
                object.heroBuyRequest = $root.protocol.HeroBuyRequest.toObject(message.heroBuyRequest, options);
            if (message.battleEndRequest != null && message.hasOwnProperty("battleEndRequest"))
                object.battleEndRequest = $root.protocol.BattleEndRequest.toObject(message.battleEndRequest, options);
            if (message.battleStartRequest != null && message.hasOwnProperty("battleStartRequest"))
                object.battleStartRequest = $root.protocol.BattleStartRequest.toObject(message.battleStartRequest, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof protocol.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    protocol.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof protocol
         * @interface IResponse
         * @property {string|null} [errcode] Response errcode
         * @property {protocol.ILoginResponse|null} [loginResponse] Response loginResponse
         * @property {protocol.IBattleSyncResponse|null} [battleSyncResponse] Response battleSyncResponse
         * @property {protocol.IBattleLoadingResponse|null} [battleLoadingResponse] Response battleLoadingResponse
         * @property {protocol.IBattleJoinResponse|null} [battleJoinResponse] Response battleJoinResponse
         * @property {protocol.IBattleStatusResponse|null} [battleStatusResponse] Response battleStatusResponse
         * @property {protocol.ITeamListResponse|null} [teamListResponse] Response teamListResponse
         * @property {protocol.IMatchBattleInfoResponse|null} [matchBattleInfoResponse] Response matchBattleInfoResponse
         * @property {protocol.ITeamByApplyResponse|null} [teamByApplyResponse] Response teamByApplyResponse
         * @property {protocol.ITeamByRefuseResponse|null} [teamByRefuseResponse] Response teamByRefuseResponse
         * @property {protocol.INoticeResponse|null} [noticeResponse] Response noticeResponse
         * @property {protocol.IHeartbeatResponse|null} [heartbeatResponse] Response heartbeatResponse
         * @property {protocol.IBattleFrameListResponse|null} [battleFrameListResponse] Response battleFrameListResponse
         * @property {protocol.ITeamCreateResponse|null} [teamCreateResponse] Response teamCreateResponse
         * @property {protocol.IHeroBuyResponse|null} [heroBuyResponse] Response heroBuyResponse
         * @property {protocol.IBattleEndResponse|null} [battleEndResponse] Response battleEndResponse
         * @property {protocol.IBattleStartResponse|null} [battleStartResponse] Response battleStartResponse
         */

        /**
         * Constructs a new Response.
         * @memberof protocol
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {protocol.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response errcode.
         * @member {string} errcode
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.errcode = "";

        /**
         * Response loginResponse.
         * @member {protocol.ILoginResponse|null|undefined} loginResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.loginResponse = null;

        /**
         * Response battleSyncResponse.
         * @member {protocol.IBattleSyncResponse|null|undefined} battleSyncResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleSyncResponse = null;

        /**
         * Response battleLoadingResponse.
         * @member {protocol.IBattleLoadingResponse|null|undefined} battleLoadingResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleLoadingResponse = null;

        /**
         * Response battleJoinResponse.
         * @member {protocol.IBattleJoinResponse|null|undefined} battleJoinResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleJoinResponse = null;

        /**
         * Response battleStatusResponse.
         * @member {protocol.IBattleStatusResponse|null|undefined} battleStatusResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleStatusResponse = null;

        /**
         * Response teamListResponse.
         * @member {protocol.ITeamListResponse|null|undefined} teamListResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.teamListResponse = null;

        /**
         * Response matchBattleInfoResponse.
         * @member {protocol.IMatchBattleInfoResponse|null|undefined} matchBattleInfoResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.matchBattleInfoResponse = null;

        /**
         * Response teamByApplyResponse.
         * @member {protocol.ITeamByApplyResponse|null|undefined} teamByApplyResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.teamByApplyResponse = null;

        /**
         * Response teamByRefuseResponse.
         * @member {protocol.ITeamByRefuseResponse|null|undefined} teamByRefuseResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.teamByRefuseResponse = null;

        /**
         * Response noticeResponse.
         * @member {protocol.INoticeResponse|null|undefined} noticeResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.noticeResponse = null;

        /**
         * Response heartbeatResponse.
         * @member {protocol.IHeartbeatResponse|null|undefined} heartbeatResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.heartbeatResponse = null;

        /**
         * Response battleFrameListResponse.
         * @member {protocol.IBattleFrameListResponse|null|undefined} battleFrameListResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleFrameListResponse = null;

        /**
         * Response teamCreateResponse.
         * @member {protocol.ITeamCreateResponse|null|undefined} teamCreateResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.teamCreateResponse = null;

        /**
         * Response heroBuyResponse.
         * @member {protocol.IHeroBuyResponse|null|undefined} heroBuyResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.heroBuyResponse = null;

        /**
         * Response battleEndResponse.
         * @member {protocol.IBattleEndResponse|null|undefined} battleEndResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleEndResponse = null;

        /**
         * Response battleStartResponse.
         * @member {protocol.IBattleStartResponse|null|undefined} battleStartResponse
         * @memberof protocol.Response
         * @instance
         */
        Response.prototype.battleStartResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof protocol.Response
         * @static
         * @param {protocol.IResponse=} [properties] Properties to set
         * @returns {protocol.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link protocol.Response.verify|verify} messages.
         * @function encode
         * @memberof protocol.Response
         * @static
         * @param {protocol.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errcode);
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                $root.protocol.LoginResponse.encode(message.loginResponse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.battleSyncResponse != null && message.hasOwnProperty("battleSyncResponse"))
                $root.protocol.BattleSyncResponse.encode(message.battleSyncResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.battleLoadingResponse != null && message.hasOwnProperty("battleLoadingResponse"))
                $root.protocol.BattleLoadingResponse.encode(message.battleLoadingResponse, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.battleJoinResponse != null && message.hasOwnProperty("battleJoinResponse"))
                $root.protocol.BattleJoinResponse.encode(message.battleJoinResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.battleStatusResponse != null && message.hasOwnProperty("battleStatusResponse"))
                $root.protocol.BattleStatusResponse.encode(message.battleStatusResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.teamListResponse != null && message.hasOwnProperty("teamListResponse"))
                $root.protocol.TeamListResponse.encode(message.teamListResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.matchBattleInfoResponse != null && message.hasOwnProperty("matchBattleInfoResponse"))
                $root.protocol.MatchBattleInfoResponse.encode(message.matchBattleInfoResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.teamByApplyResponse != null && message.hasOwnProperty("teamByApplyResponse"))
                $root.protocol.TeamByApplyResponse.encode(message.teamByApplyResponse, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.teamByRefuseResponse != null && message.hasOwnProperty("teamByRefuseResponse"))
                $root.protocol.TeamByRefuseResponse.encode(message.teamByRefuseResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.noticeResponse != null && message.hasOwnProperty("noticeResponse"))
                $root.protocol.NoticeResponse.encode(message.noticeResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.heartbeatResponse != null && message.hasOwnProperty("heartbeatResponse"))
                $root.protocol.HeartbeatResponse.encode(message.heartbeatResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.battleFrameListResponse != null && message.hasOwnProperty("battleFrameListResponse"))
                $root.protocol.BattleFrameListResponse.encode(message.battleFrameListResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.teamCreateResponse != null && message.hasOwnProperty("teamCreateResponse"))
                $root.protocol.TeamCreateResponse.encode(message.teamCreateResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.heroBuyResponse != null && message.hasOwnProperty("heroBuyResponse"))
                $root.protocol.HeroBuyResponse.encode(message.heroBuyResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.battleEndResponse != null && message.hasOwnProperty("battleEndResponse"))
                $root.protocol.BattleEndResponse.encode(message.battleEndResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.battleStartResponse != null && message.hasOwnProperty("battleStartResponse"))
                $root.protocol.BattleStartResponse.encode(message.battleStartResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link protocol.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Response
         * @static
         * @param {protocol.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.string();
                    break;
                case 2:
                    message.loginResponse = $root.protocol.LoginResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.battleSyncResponse = $root.protocol.BattleSyncResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.battleLoadingResponse = $root.protocol.BattleLoadingResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.battleJoinResponse = $root.protocol.BattleJoinResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.battleStatusResponse = $root.protocol.BattleStatusResponse.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.teamListResponse = $root.protocol.TeamListResponse.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.matchBattleInfoResponse = $root.protocol.MatchBattleInfoResponse.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.teamByApplyResponse = $root.protocol.TeamByApplyResponse.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.teamByRefuseResponse = $root.protocol.TeamByRefuseResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.noticeResponse = $root.protocol.NoticeResponse.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.heartbeatResponse = $root.protocol.HeartbeatResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.battleFrameListResponse = $root.protocol.BattleFrameListResponse.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.teamCreateResponse = $root.protocol.TeamCreateResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.heroBuyResponse = $root.protocol.HeroBuyResponse.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.battleEndResponse = $root.protocol.BattleEndResponse.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.battleStartResponse = $root.protocol.BattleStartResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof protocol.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isString(message.errcode))
                    return "errcode: string expected";
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse")) {
                var error = $root.protocol.LoginResponse.verify(message.loginResponse);
                if (error)
                    return "loginResponse." + error;
            }
            if (message.battleSyncResponse != null && message.hasOwnProperty("battleSyncResponse")) {
                var error = $root.protocol.BattleSyncResponse.verify(message.battleSyncResponse);
                if (error)
                    return "battleSyncResponse." + error;
            }
            if (message.battleLoadingResponse != null && message.hasOwnProperty("battleLoadingResponse")) {
                var error = $root.protocol.BattleLoadingResponse.verify(message.battleLoadingResponse);
                if (error)
                    return "battleLoadingResponse." + error;
            }
            if (message.battleJoinResponse != null && message.hasOwnProperty("battleJoinResponse")) {
                var error = $root.protocol.BattleJoinResponse.verify(message.battleJoinResponse);
                if (error)
                    return "battleJoinResponse." + error;
            }
            if (message.battleStatusResponse != null && message.hasOwnProperty("battleStatusResponse")) {
                var error = $root.protocol.BattleStatusResponse.verify(message.battleStatusResponse);
                if (error)
                    return "battleStatusResponse." + error;
            }
            if (message.teamListResponse != null && message.hasOwnProperty("teamListResponse")) {
                var error = $root.protocol.TeamListResponse.verify(message.teamListResponse);
                if (error)
                    return "teamListResponse." + error;
            }
            if (message.matchBattleInfoResponse != null && message.hasOwnProperty("matchBattleInfoResponse")) {
                var error = $root.protocol.MatchBattleInfoResponse.verify(message.matchBattleInfoResponse);
                if (error)
                    return "matchBattleInfoResponse." + error;
            }
            if (message.teamByApplyResponse != null && message.hasOwnProperty("teamByApplyResponse")) {
                var error = $root.protocol.TeamByApplyResponse.verify(message.teamByApplyResponse);
                if (error)
                    return "teamByApplyResponse." + error;
            }
            if (message.teamByRefuseResponse != null && message.hasOwnProperty("teamByRefuseResponse")) {
                var error = $root.protocol.TeamByRefuseResponse.verify(message.teamByRefuseResponse);
                if (error)
                    return "teamByRefuseResponse." + error;
            }
            if (message.noticeResponse != null && message.hasOwnProperty("noticeResponse")) {
                var error = $root.protocol.NoticeResponse.verify(message.noticeResponse);
                if (error)
                    return "noticeResponse." + error;
            }
            if (message.heartbeatResponse != null && message.hasOwnProperty("heartbeatResponse")) {
                var error = $root.protocol.HeartbeatResponse.verify(message.heartbeatResponse);
                if (error)
                    return "heartbeatResponse." + error;
            }
            if (message.battleFrameListResponse != null && message.hasOwnProperty("battleFrameListResponse")) {
                var error = $root.protocol.BattleFrameListResponse.verify(message.battleFrameListResponse);
                if (error)
                    return "battleFrameListResponse." + error;
            }
            if (message.teamCreateResponse != null && message.hasOwnProperty("teamCreateResponse")) {
                var error = $root.protocol.TeamCreateResponse.verify(message.teamCreateResponse);
                if (error)
                    return "teamCreateResponse." + error;
            }
            if (message.heroBuyResponse != null && message.hasOwnProperty("heroBuyResponse")) {
                var error = $root.protocol.HeroBuyResponse.verify(message.heroBuyResponse);
                if (error)
                    return "heroBuyResponse." + error;
            }
            if (message.battleEndResponse != null && message.hasOwnProperty("battleEndResponse")) {
                var error = $root.protocol.BattleEndResponse.verify(message.battleEndResponse);
                if (error)
                    return "battleEndResponse." + error;
            }
            if (message.battleStartResponse != null && message.hasOwnProperty("battleStartResponse")) {
                var error = $root.protocol.BattleStartResponse.verify(message.battleStartResponse);
                if (error)
                    return "battleStartResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Response)
                return object;
            var message = new $root.protocol.Response();
            if (object.errcode != null)
                message.errcode = String(object.errcode);
            if (object.loginResponse != null) {
                if (typeof object.loginResponse !== "object")
                    throw TypeError(".protocol.Response.loginResponse: object expected");
                message.loginResponse = $root.protocol.LoginResponse.fromObject(object.loginResponse);
            }
            if (object.battleSyncResponse != null) {
                if (typeof object.battleSyncResponse !== "object")
                    throw TypeError(".protocol.Response.battleSyncResponse: object expected");
                message.battleSyncResponse = $root.protocol.BattleSyncResponse.fromObject(object.battleSyncResponse);
            }
            if (object.battleLoadingResponse != null) {
                if (typeof object.battleLoadingResponse !== "object")
                    throw TypeError(".protocol.Response.battleLoadingResponse: object expected");
                message.battleLoadingResponse = $root.protocol.BattleLoadingResponse.fromObject(object.battleLoadingResponse);
            }
            if (object.battleJoinResponse != null) {
                if (typeof object.battleJoinResponse !== "object")
                    throw TypeError(".protocol.Response.battleJoinResponse: object expected");
                message.battleJoinResponse = $root.protocol.BattleJoinResponse.fromObject(object.battleJoinResponse);
            }
            if (object.battleStatusResponse != null) {
                if (typeof object.battleStatusResponse !== "object")
                    throw TypeError(".protocol.Response.battleStatusResponse: object expected");
                message.battleStatusResponse = $root.protocol.BattleStatusResponse.fromObject(object.battleStatusResponse);
            }
            if (object.teamListResponse != null) {
                if (typeof object.teamListResponse !== "object")
                    throw TypeError(".protocol.Response.teamListResponse: object expected");
                message.teamListResponse = $root.protocol.TeamListResponse.fromObject(object.teamListResponse);
            }
            if (object.matchBattleInfoResponse != null) {
                if (typeof object.matchBattleInfoResponse !== "object")
                    throw TypeError(".protocol.Response.matchBattleInfoResponse: object expected");
                message.matchBattleInfoResponse = $root.protocol.MatchBattleInfoResponse.fromObject(object.matchBattleInfoResponse);
            }
            if (object.teamByApplyResponse != null) {
                if (typeof object.teamByApplyResponse !== "object")
                    throw TypeError(".protocol.Response.teamByApplyResponse: object expected");
                message.teamByApplyResponse = $root.protocol.TeamByApplyResponse.fromObject(object.teamByApplyResponse);
            }
            if (object.teamByRefuseResponse != null) {
                if (typeof object.teamByRefuseResponse !== "object")
                    throw TypeError(".protocol.Response.teamByRefuseResponse: object expected");
                message.teamByRefuseResponse = $root.protocol.TeamByRefuseResponse.fromObject(object.teamByRefuseResponse);
            }
            if (object.noticeResponse != null) {
                if (typeof object.noticeResponse !== "object")
                    throw TypeError(".protocol.Response.noticeResponse: object expected");
                message.noticeResponse = $root.protocol.NoticeResponse.fromObject(object.noticeResponse);
            }
            if (object.heartbeatResponse != null) {
                if (typeof object.heartbeatResponse !== "object")
                    throw TypeError(".protocol.Response.heartbeatResponse: object expected");
                message.heartbeatResponse = $root.protocol.HeartbeatResponse.fromObject(object.heartbeatResponse);
            }
            if (object.battleFrameListResponse != null) {
                if (typeof object.battleFrameListResponse !== "object")
                    throw TypeError(".protocol.Response.battleFrameListResponse: object expected");
                message.battleFrameListResponse = $root.protocol.BattleFrameListResponse.fromObject(object.battleFrameListResponse);
            }
            if (object.teamCreateResponse != null) {
                if (typeof object.teamCreateResponse !== "object")
                    throw TypeError(".protocol.Response.teamCreateResponse: object expected");
                message.teamCreateResponse = $root.protocol.TeamCreateResponse.fromObject(object.teamCreateResponse);
            }
            if (object.heroBuyResponse != null) {
                if (typeof object.heroBuyResponse !== "object")
                    throw TypeError(".protocol.Response.heroBuyResponse: object expected");
                message.heroBuyResponse = $root.protocol.HeroBuyResponse.fromObject(object.heroBuyResponse);
            }
            if (object.battleEndResponse != null) {
                if (typeof object.battleEndResponse !== "object")
                    throw TypeError(".protocol.Response.battleEndResponse: object expected");
                message.battleEndResponse = $root.protocol.BattleEndResponse.fromObject(object.battleEndResponse);
            }
            if (object.battleStartResponse != null) {
                if (typeof object.battleStartResponse !== "object")
                    throw TypeError(".protocol.Response.battleStartResponse: object expected");
                message.battleStartResponse = $root.protocol.BattleStartResponse.fromObject(object.battleStartResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Response
         * @static
         * @param {protocol.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errcode = "";
                object.loginResponse = null;
                object.battleSyncResponse = null;
                object.battleLoadingResponse = null;
                object.battleJoinResponse = null;
                object.battleStatusResponse = null;
                object.teamListResponse = null;
                object.matchBattleInfoResponse = null;
                object.teamByApplyResponse = null;
                object.teamByRefuseResponse = null;
                object.noticeResponse = null;
                object.heartbeatResponse = null;
                object.battleFrameListResponse = null;
                object.teamCreateResponse = null;
                object.heroBuyResponse = null;
                object.battleEndResponse = null;
                object.battleStartResponse = null;
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                object.loginResponse = $root.protocol.LoginResponse.toObject(message.loginResponse, options);
            if (message.battleSyncResponse != null && message.hasOwnProperty("battleSyncResponse"))
                object.battleSyncResponse = $root.protocol.BattleSyncResponse.toObject(message.battleSyncResponse, options);
            if (message.battleLoadingResponse != null && message.hasOwnProperty("battleLoadingResponse"))
                object.battleLoadingResponse = $root.protocol.BattleLoadingResponse.toObject(message.battleLoadingResponse, options);
            if (message.battleJoinResponse != null && message.hasOwnProperty("battleJoinResponse"))
                object.battleJoinResponse = $root.protocol.BattleJoinResponse.toObject(message.battleJoinResponse, options);
            if (message.battleStatusResponse != null && message.hasOwnProperty("battleStatusResponse"))
                object.battleStatusResponse = $root.protocol.BattleStatusResponse.toObject(message.battleStatusResponse, options);
            if (message.teamListResponse != null && message.hasOwnProperty("teamListResponse"))
                object.teamListResponse = $root.protocol.TeamListResponse.toObject(message.teamListResponse, options);
            if (message.matchBattleInfoResponse != null && message.hasOwnProperty("matchBattleInfoResponse"))
                object.matchBattleInfoResponse = $root.protocol.MatchBattleInfoResponse.toObject(message.matchBattleInfoResponse, options);
            if (message.teamByApplyResponse != null && message.hasOwnProperty("teamByApplyResponse"))
                object.teamByApplyResponse = $root.protocol.TeamByApplyResponse.toObject(message.teamByApplyResponse, options);
            if (message.teamByRefuseResponse != null && message.hasOwnProperty("teamByRefuseResponse"))
                object.teamByRefuseResponse = $root.protocol.TeamByRefuseResponse.toObject(message.teamByRefuseResponse, options);
            if (message.noticeResponse != null && message.hasOwnProperty("noticeResponse"))
                object.noticeResponse = $root.protocol.NoticeResponse.toObject(message.noticeResponse, options);
            if (message.heartbeatResponse != null && message.hasOwnProperty("heartbeatResponse"))
                object.heartbeatResponse = $root.protocol.HeartbeatResponse.toObject(message.heartbeatResponse, options);
            if (message.battleFrameListResponse != null && message.hasOwnProperty("battleFrameListResponse"))
                object.battleFrameListResponse = $root.protocol.BattleFrameListResponse.toObject(message.battleFrameListResponse, options);
            if (message.teamCreateResponse != null && message.hasOwnProperty("teamCreateResponse"))
                object.teamCreateResponse = $root.protocol.TeamCreateResponse.toObject(message.teamCreateResponse, options);
            if (message.heroBuyResponse != null && message.hasOwnProperty("heroBuyResponse"))
                object.heroBuyResponse = $root.protocol.HeroBuyResponse.toObject(message.heroBuyResponse, options);
            if (message.battleEndResponse != null && message.hasOwnProperty("battleEndResponse"))
                object.battleEndResponse = $root.protocol.BattleEndResponse.toObject(message.battleEndResponse, options);
            if (message.battleStartResponse != null && message.hasOwnProperty("battleStartResponse"))
                object.battleStartResponse = $root.protocol.BattleStartResponse.toObject(message.battleStartResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof protocol.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    protocol.CommonUser = (function() {

        /**
         * Properties of a CommonUser.
         * @memberof protocol
         * @interface ICommonUser
         * @property {string|null} [headImage] CommonUser headImage
         * @property {string|null} [name] CommonUser name
         * @property {number|null} [gold] CommonUser gold
         * @property {number|null} [power] CommonUser power
         * @property {number|null} [diam] CommonUser diam
         * @property {number|null} [headBoxId] CommonUser headBoxId
         */

        /**
         * Constructs a new CommonUser.
         * @memberof protocol
         * @classdesc Represents a CommonUser.
         * @implements ICommonUser
         * @constructor
         * @param {protocol.ICommonUser=} [properties] Properties to set
         */
        function CommonUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonUser headImage.
         * @member {string} headImage
         * @memberof protocol.CommonUser
         * @instance
         */
        CommonUser.prototype.headImage = "";

        /**
         * CommonUser name.
         * @member {string} name
         * @memberof protocol.CommonUser
         * @instance
         */
        CommonUser.prototype.name = "";

        /**
         * CommonUser gold.
         * @member {number} gold
         * @memberof protocol.CommonUser
         * @instance
         */
        CommonUser.prototype.gold = 0;

        /**
         * CommonUser power.
         * @member {number} power
         * @memberof protocol.CommonUser
         * @instance
         */
        CommonUser.prototype.power = 0;

        /**
         * CommonUser diam.
         * @member {number} diam
         * @memberof protocol.CommonUser
         * @instance
         */
        CommonUser.prototype.diam = 0;

        /**
         * CommonUser headBoxId.
         * @member {number} headBoxId
         * @memberof protocol.CommonUser
         * @instance
         */
        CommonUser.prototype.headBoxId = 0;

        /**
         * Creates a new CommonUser instance using the specified properties.
         * @function create
         * @memberof protocol.CommonUser
         * @static
         * @param {protocol.ICommonUser=} [properties] Properties to set
         * @returns {protocol.CommonUser} CommonUser instance
         */
        CommonUser.create = function create(properties) {
            return new CommonUser(properties);
        };

        /**
         * Encodes the specified CommonUser message. Does not implicitly {@link protocol.CommonUser.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonUser
         * @static
         * @param {protocol.ICommonUser} message CommonUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.headImage);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gold);
            if (message.power != null && message.hasOwnProperty("power"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.power);
            if (message.diam != null && message.hasOwnProperty("diam"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.diam);
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.headBoxId);
            return writer;
        };

        /**
         * Encodes the specified CommonUser message, length delimited. Does not implicitly {@link protocol.CommonUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonUser
         * @static
         * @param {protocol.ICommonUser} message CommonUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonUser message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonUser} CommonUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.headImage = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.gold = reader.int32();
                    break;
                case 4:
                    message.power = reader.int32();
                    break;
                case 5:
                    message.diam = reader.int32();
                    break;
                case 6:
                    message.headBoxId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonUser} CommonUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonUser message.
         * @function verify
         * @memberof protocol.CommonUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                if (!$util.isString(message.headImage))
                    return "headImage: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.power != null && message.hasOwnProperty("power"))
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            if (message.diam != null && message.hasOwnProperty("diam"))
                if (!$util.isInteger(message.diam))
                    return "diam: integer expected";
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                if (!$util.isInteger(message.headBoxId))
                    return "headBoxId: integer expected";
            return null;
        };

        /**
         * Creates a CommonUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonUser} CommonUser
         */
        CommonUser.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonUser)
                return object;
            var message = new $root.protocol.CommonUser();
            if (object.headImage != null)
                message.headImage = String(object.headImage);
            if (object.name != null)
                message.name = String(object.name);
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.power != null)
                message.power = object.power | 0;
            if (object.diam != null)
                message.diam = object.diam | 0;
            if (object.headBoxId != null)
                message.headBoxId = object.headBoxId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CommonUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonUser
         * @static
         * @param {protocol.CommonUser} message CommonUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.headImage = "";
                object.name = "";
                object.gold = 0;
                object.power = 0;
                object.diam = 0;
                object.headBoxId = 0;
            }
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                object.headImage = message.headImage;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            if (message.diam != null && message.hasOwnProperty("diam"))
                object.diam = message.diam;
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                object.headBoxId = message.headBoxId;
            return object;
        };

        /**
         * Converts this CommonUser to JSON.
         * @function toJSON
         * @memberof protocol.CommonUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonUser;
    })();

    protocol.BattleLoadingRequest = (function() {

        /**
         * Properties of a BattleLoadingRequest.
         * @memberof protocol
         * @interface IBattleLoadingRequest
         * @property {number|null} [percent] BattleLoadingRequest percent
         */

        /**
         * Constructs a new BattleLoadingRequest.
         * @memberof protocol
         * @classdesc Represents a BattleLoadingRequest.
         * @implements IBattleLoadingRequest
         * @constructor
         * @param {protocol.IBattleLoadingRequest=} [properties] Properties to set
         */
        function BattleLoadingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleLoadingRequest percent.
         * @member {number} percent
         * @memberof protocol.BattleLoadingRequest
         * @instance
         */
        BattleLoadingRequest.prototype.percent = 0;

        /**
         * Creates a new BattleLoadingRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {protocol.IBattleLoadingRequest=} [properties] Properties to set
         * @returns {protocol.BattleLoadingRequest} BattleLoadingRequest instance
         */
        BattleLoadingRequest.create = function create(properties) {
            return new BattleLoadingRequest(properties);
        };

        /**
         * Encodes the specified BattleLoadingRequest message. Does not implicitly {@link protocol.BattleLoadingRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {protocol.IBattleLoadingRequest} message BattleLoadingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLoadingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.percent != null && message.hasOwnProperty("percent"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.percent);
            return writer;
        };

        /**
         * Encodes the specified BattleLoadingRequest message, length delimited. Does not implicitly {@link protocol.BattleLoadingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {protocol.IBattleLoadingRequest} message BattleLoadingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLoadingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLoadingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleLoadingRequest} BattleLoadingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLoadingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleLoadingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.percent = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLoadingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleLoadingRequest} BattleLoadingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLoadingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLoadingRequest message.
         * @function verify
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLoadingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.percent != null && message.hasOwnProperty("percent"))
                if (!$util.isInteger(message.percent))
                    return "percent: integer expected";
            return null;
        };

        /**
         * Creates a BattleLoadingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleLoadingRequest} BattleLoadingRequest
         */
        BattleLoadingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleLoadingRequest)
                return object;
            var message = new $root.protocol.BattleLoadingRequest();
            if (object.percent != null)
                message.percent = object.percent | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleLoadingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleLoadingRequest
         * @static
         * @param {protocol.BattleLoadingRequest} message BattleLoadingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLoadingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.percent = 0;
            if (message.percent != null && message.hasOwnProperty("percent"))
                object.percent = message.percent;
            return object;
        };

        /**
         * Converts this BattleLoadingRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleLoadingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLoadingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLoadingRequest;
    })();

    protocol.BattleLoadingResponse = (function() {

        /**
         * Properties of a BattleLoadingResponse.
         * @memberof protocol
         * @interface IBattleLoadingResponse
         * @property {number|null} [uid] BattleLoadingResponse uid
         * @property {number|null} [percent] BattleLoadingResponse percent
         */

        /**
         * Constructs a new BattleLoadingResponse.
         * @memberof protocol
         * @classdesc Represents a BattleLoadingResponse.
         * @implements IBattleLoadingResponse
         * @constructor
         * @param {protocol.IBattleLoadingResponse=} [properties] Properties to set
         */
        function BattleLoadingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleLoadingResponse uid.
         * @member {number} uid
         * @memberof protocol.BattleLoadingResponse
         * @instance
         */
        BattleLoadingResponse.prototype.uid = 0;

        /**
         * BattleLoadingResponse percent.
         * @member {number} percent
         * @memberof protocol.BattleLoadingResponse
         * @instance
         */
        BattleLoadingResponse.prototype.percent = 0;

        /**
         * Creates a new BattleLoadingResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {protocol.IBattleLoadingResponse=} [properties] Properties to set
         * @returns {protocol.BattleLoadingResponse} BattleLoadingResponse instance
         */
        BattleLoadingResponse.create = function create(properties) {
            return new BattleLoadingResponse(properties);
        };

        /**
         * Encodes the specified BattleLoadingResponse message. Does not implicitly {@link protocol.BattleLoadingResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {protocol.IBattleLoadingResponse} message BattleLoadingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLoadingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.percent != null && message.hasOwnProperty("percent"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.percent);
            return writer;
        };

        /**
         * Encodes the specified BattleLoadingResponse message, length delimited. Does not implicitly {@link protocol.BattleLoadingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {protocol.IBattleLoadingResponse} message BattleLoadingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLoadingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLoadingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleLoadingResponse} BattleLoadingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLoadingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleLoadingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.percent = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLoadingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleLoadingResponse} BattleLoadingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLoadingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLoadingResponse message.
         * @function verify
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLoadingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.percent != null && message.hasOwnProperty("percent"))
                if (!$util.isInteger(message.percent))
                    return "percent: integer expected";
            return null;
        };

        /**
         * Creates a BattleLoadingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleLoadingResponse} BattleLoadingResponse
         */
        BattleLoadingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleLoadingResponse)
                return object;
            var message = new $root.protocol.BattleLoadingResponse();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.percent != null)
                message.percent = object.percent | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleLoadingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleLoadingResponse
         * @static
         * @param {protocol.BattleLoadingResponse} message BattleLoadingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLoadingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.percent = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.percent != null && message.hasOwnProperty("percent"))
                object.percent = message.percent;
            return object;
        };

        /**
         * Converts this BattleLoadingResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleLoadingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLoadingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLoadingResponse;
    })();

    protocol.BattleStatusResponse = (function() {

        /**
         * Properties of a BattleStatusResponse.
         * @memberof protocol
         * @interface IBattleStatusResponse
         * @property {protocol.BATTLE_STATUS|null} [status] BattleStatusResponse status
         * @property {Array.<protocol.IBattleUser>|null} [userList] BattleStatusResponse userList
         * @property {number|Long|null} [startTime] BattleStatusResponse startTime
         * @property {number|null} [duration] BattleStatusResponse duration
         */

        /**
         * Constructs a new BattleStatusResponse.
         * @memberof protocol
         * @classdesc Represents a BattleStatusResponse.
         * @implements IBattleStatusResponse
         * @constructor
         * @param {protocol.IBattleStatusResponse=} [properties] Properties to set
         */
        function BattleStatusResponse(properties) {
            this.userList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleStatusResponse status.
         * @member {protocol.BATTLE_STATUS} status
         * @memberof protocol.BattleStatusResponse
         * @instance
         */
        BattleStatusResponse.prototype.status = 0;

        /**
         * BattleStatusResponse userList.
         * @member {Array.<protocol.IBattleUser>} userList
         * @memberof protocol.BattleStatusResponse
         * @instance
         */
        BattleStatusResponse.prototype.userList = $util.emptyArray;

        /**
         * BattleStatusResponse startTime.
         * @member {number|Long} startTime
         * @memberof protocol.BattleStatusResponse
         * @instance
         */
        BattleStatusResponse.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleStatusResponse duration.
         * @member {number} duration
         * @memberof protocol.BattleStatusResponse
         * @instance
         */
        BattleStatusResponse.prototype.duration = 0;

        /**
         * Creates a new BattleStatusResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {protocol.IBattleStatusResponse=} [properties] Properties to set
         * @returns {protocol.BattleStatusResponse} BattleStatusResponse instance
         */
        BattleStatusResponse.create = function create(properties) {
            return new BattleStatusResponse(properties);
        };

        /**
         * Encodes the specified BattleStatusResponse message. Does not implicitly {@link protocol.BattleStatusResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {protocol.IBattleStatusResponse} message BattleStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStatusResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.userList != null && message.userList.length)
                for (var i = 0; i < message.userList.length; ++i)
                    $root.protocol.BattleUser.encode(message.userList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startTime);
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.duration);
            return writer;
        };

        /**
         * Encodes the specified BattleStatusResponse message, length delimited. Does not implicitly {@link protocol.BattleStatusResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {protocol.IBattleStatusResponse} message BattleStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleStatusResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleStatusResponse} BattleStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStatusResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleStatusResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    message.userList.push($root.protocol.BattleUser.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startTime = reader.int64();
                    break;
                case 5:
                    message.duration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleStatusResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleStatusResponse} BattleStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStatusResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleStatusResponse message.
         * @function verify
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleStatusResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.userList != null && message.hasOwnProperty("userList")) {
                if (!Array.isArray(message.userList))
                    return "userList: array expected";
                for (var i = 0; i < message.userList.length; ++i) {
                    var error = $root.protocol.BattleUser.verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            return null;
        };

        /**
         * Creates a BattleStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleStatusResponse} BattleStatusResponse
         */
        BattleStatusResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleStatusResponse)
                return object;
            var message = new $root.protocol.BattleStatusResponse();
            switch (object.status) {
            case "LOADING":
            case 0:
                message.status = 0;
                break;
            case "BEGIN":
            case 1:
                message.status = 1;
                break;
            case "END":
            case 2:
                message.status = 2;
                break;
            }
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".protocol.BattleStatusResponse.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".protocol.BattleStatusResponse.userList: object expected");
                    message.userList[i] = $root.protocol.BattleUser.fromObject(object.userList[i]);
                }
            }
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
            if (object.duration != null)
                message.duration = object.duration | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleStatusResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleStatusResponse
         * @static
         * @param {protocol.BattleStatusResponse} message BattleStatusResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleStatusResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userList = [];
            if (options.defaults) {
                object.status = options.enums === String ? "LOADING" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                object.duration = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.protocol.BATTLE_STATUS[message.status] : message.status;
            if (message.userList && message.userList.length) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    object.userList[j] = $root.protocol.BattleUser.toObject(message.userList[j], options);
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };

        /**
         * Converts this BattleStatusResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleStatusResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleStatusResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleStatusResponse;
    })();

    protocol.BattleJoinResponse = (function() {

        /**
         * Properties of a BattleJoinResponse.
         * @memberof protocol
         * @interface IBattleJoinResponse
         * @property {number|Long|null} [battleId] BattleJoinResponse battleId
         */

        /**
         * Constructs a new BattleJoinResponse.
         * @memberof protocol
         * @classdesc Represents a BattleJoinResponse.
         * @implements IBattleJoinResponse
         * @constructor
         * @param {protocol.IBattleJoinResponse=} [properties] Properties to set
         */
        function BattleJoinResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleJoinResponse battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleJoinResponse
         * @instance
         */
        BattleJoinResponse.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BattleJoinResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {protocol.IBattleJoinResponse=} [properties] Properties to set
         * @returns {protocol.BattleJoinResponse} BattleJoinResponse instance
         */
        BattleJoinResponse.create = function create(properties) {
            return new BattleJoinResponse(properties);
        };

        /**
         * Encodes the specified BattleJoinResponse message. Does not implicitly {@link protocol.BattleJoinResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {protocol.IBattleJoinResponse} message BattleJoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleJoinResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            return writer;
        };

        /**
         * Encodes the specified BattleJoinResponse message, length delimited. Does not implicitly {@link protocol.BattleJoinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {protocol.IBattleJoinResponse} message BattleJoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleJoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleJoinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleJoinResponse} BattleJoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleJoinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleJoinResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleJoinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleJoinResponse} BattleJoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleJoinResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleJoinResponse message.
         * @function verify
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleJoinResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BattleJoinResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleJoinResponse} BattleJoinResponse
         */
        BattleJoinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleJoinResponse)
                return object;
            var message = new $root.protocol.BattleJoinResponse();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BattleJoinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleJoinResponse
         * @static
         * @param {protocol.BattleJoinResponse} message BattleJoinResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleJoinResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            return object;
        };

        /**
         * Converts this BattleJoinResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleJoinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleJoinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleJoinResponse;
    })();

    protocol.BattleLoginRequest = (function() {

        /**
         * Properties of a BattleLoginRequest.
         * @memberof protocol
         * @interface IBattleLoginRequest
         * @property {number|Long|null} [battleId] BattleLoginRequest battleId
         */

        /**
         * Constructs a new BattleLoginRequest.
         * @memberof protocol
         * @classdesc Represents a BattleLoginRequest.
         * @implements IBattleLoginRequest
         * @constructor
         * @param {protocol.IBattleLoginRequest=} [properties] Properties to set
         */
        function BattleLoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleLoginRequest battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleLoginRequest
         * @instance
         */
        BattleLoginRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BattleLoginRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {protocol.IBattleLoginRequest=} [properties] Properties to set
         * @returns {protocol.BattleLoginRequest} BattleLoginRequest instance
         */
        BattleLoginRequest.create = function create(properties) {
            return new BattleLoginRequest(properties);
        };

        /**
         * Encodes the specified BattleLoginRequest message. Does not implicitly {@link protocol.BattleLoginRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {protocol.IBattleLoginRequest} message BattleLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            return writer;
        };

        /**
         * Encodes the specified BattleLoginRequest message, length delimited. Does not implicitly {@link protocol.BattleLoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {protocol.IBattleLoginRequest} message BattleLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleLoginRequest} BattleLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleLoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleLoginRequest} BattleLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLoginRequest message.
         * @function verify
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BattleLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleLoginRequest} BattleLoginRequest
         */
        BattleLoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleLoginRequest)
                return object;
            var message = new $root.protocol.BattleLoginRequest();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BattleLoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleLoginRequest
         * @static
         * @param {protocol.BattleLoginRequest} message BattleLoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            return object;
        };

        /**
         * Converts this BattleLoginRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleLoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLoginRequest;
    })();

    protocol.BattleReLoginRequest = (function() {

        /**
         * Properties of a BattleReLoginRequest.
         * @memberof protocol
         * @interface IBattleReLoginRequest
         * @property {number|Long|null} [battleId] BattleReLoginRequest battleId
         */

        /**
         * Constructs a new BattleReLoginRequest.
         * @memberof protocol
         * @classdesc Represents a BattleReLoginRequest.
         * @implements IBattleReLoginRequest
         * @constructor
         * @param {protocol.IBattleReLoginRequest=} [properties] Properties to set
         */
        function BattleReLoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleReLoginRequest battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleReLoginRequest
         * @instance
         */
        BattleReLoginRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BattleReLoginRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {protocol.IBattleReLoginRequest=} [properties] Properties to set
         * @returns {protocol.BattleReLoginRequest} BattleReLoginRequest instance
         */
        BattleReLoginRequest.create = function create(properties) {
            return new BattleReLoginRequest(properties);
        };

        /**
         * Encodes the specified BattleReLoginRequest message. Does not implicitly {@link protocol.BattleReLoginRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {protocol.IBattleReLoginRequest} message BattleReLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleReLoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            return writer;
        };

        /**
         * Encodes the specified BattleReLoginRequest message, length delimited. Does not implicitly {@link protocol.BattleReLoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {protocol.IBattleReLoginRequest} message BattleReLoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleReLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleReLoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleReLoginRequest} BattleReLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleReLoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleReLoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleReLoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleReLoginRequest} BattleReLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleReLoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleReLoginRequest message.
         * @function verify
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleReLoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BattleReLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleReLoginRequest} BattleReLoginRequest
         */
        BattleReLoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleReLoginRequest)
                return object;
            var message = new $root.protocol.BattleReLoginRequest();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BattleReLoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleReLoginRequest
         * @static
         * @param {protocol.BattleReLoginRequest} message BattleReLoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleReLoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            return object;
        };

        /**
         * Converts this BattleReLoginRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleReLoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleReLoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleReLoginRequest;
    })();

    protocol.BattleFrameListRequest = (function() {

        /**
         * Properties of a BattleFrameListRequest.
         * @memberof protocol
         * @interface IBattleFrameListRequest
         * @property {number|Long|null} [battleId] BattleFrameListRequest battleId
         * @property {number|null} [startFrameId] BattleFrameListRequest startFrameId
         * @property {number|null} [limit] BattleFrameListRequest limit
         */

        /**
         * Constructs a new BattleFrameListRequest.
         * @memberof protocol
         * @classdesc Represents a BattleFrameListRequest.
         * @implements IBattleFrameListRequest
         * @constructor
         * @param {protocol.IBattleFrameListRequest=} [properties] Properties to set
         */
        function BattleFrameListRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleFrameListRequest battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleFrameListRequest
         * @instance
         */
        BattleFrameListRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleFrameListRequest startFrameId.
         * @member {number} startFrameId
         * @memberof protocol.BattleFrameListRequest
         * @instance
         */
        BattleFrameListRequest.prototype.startFrameId = 0;

        /**
         * BattleFrameListRequest limit.
         * @member {number} limit
         * @memberof protocol.BattleFrameListRequest
         * @instance
         */
        BattleFrameListRequest.prototype.limit = 0;

        /**
         * Creates a new BattleFrameListRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {protocol.IBattleFrameListRequest=} [properties] Properties to set
         * @returns {protocol.BattleFrameListRequest} BattleFrameListRequest instance
         */
        BattleFrameListRequest.create = function create(properties) {
            return new BattleFrameListRequest(properties);
        };

        /**
         * Encodes the specified BattleFrameListRequest message. Does not implicitly {@link protocol.BattleFrameListRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {protocol.IBattleFrameListRequest} message BattleFrameListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFrameListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            if (message.startFrameId != null && message.hasOwnProperty("startFrameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.startFrameId);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified BattleFrameListRequest message, length delimited. Does not implicitly {@link protocol.BattleFrameListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {protocol.IBattleFrameListRequest} message BattleFrameListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFrameListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleFrameListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleFrameListRequest} BattleFrameListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFrameListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleFrameListRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                case 2:
                    message.startFrameId = reader.int32();
                    break;
                case 3:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleFrameListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleFrameListRequest} BattleFrameListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFrameListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleFrameListRequest message.
         * @function verify
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleFrameListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            if (message.startFrameId != null && message.hasOwnProperty("startFrameId"))
                if (!$util.isInteger(message.startFrameId))
                    return "startFrameId: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a BattleFrameListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleFrameListRequest} BattleFrameListRequest
         */
        BattleFrameListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleFrameListRequest)
                return object;
            var message = new $root.protocol.BattleFrameListRequest();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            if (object.startFrameId != null)
                message.startFrameId = object.startFrameId | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleFrameListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleFrameListRequest
         * @static
         * @param {protocol.BattleFrameListRequest} message BattleFrameListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleFrameListRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
                object.startFrameId = 0;
                object.limit = 0;
            }
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            if (message.startFrameId != null && message.hasOwnProperty("startFrameId"))
                object.startFrameId = message.startFrameId;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this BattleFrameListRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleFrameListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleFrameListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleFrameListRequest;
    })();

    protocol.BattleFrameListResponse = (function() {

        /**
         * Properties of a BattleFrameListResponse.
         * @memberof protocol
         * @interface IBattleFrameListResponse
         * @property {Array.<protocol.IBattleSyncResponse>|null} [frameList] BattleFrameListResponse frameList
         * @property {boolean|null} [isEnd] BattleFrameListResponse isEnd
         */

        /**
         * Constructs a new BattleFrameListResponse.
         * @memberof protocol
         * @classdesc Represents a BattleFrameListResponse.
         * @implements IBattleFrameListResponse
         * @constructor
         * @param {protocol.IBattleFrameListResponse=} [properties] Properties to set
         */
        function BattleFrameListResponse(properties) {
            this.frameList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleFrameListResponse frameList.
         * @member {Array.<protocol.IBattleSyncResponse>} frameList
         * @memberof protocol.BattleFrameListResponse
         * @instance
         */
        BattleFrameListResponse.prototype.frameList = $util.emptyArray;

        /**
         * BattleFrameListResponse isEnd.
         * @member {boolean} isEnd
         * @memberof protocol.BattleFrameListResponse
         * @instance
         */
        BattleFrameListResponse.prototype.isEnd = false;

        /**
         * Creates a new BattleFrameListResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {protocol.IBattleFrameListResponse=} [properties] Properties to set
         * @returns {protocol.BattleFrameListResponse} BattleFrameListResponse instance
         */
        BattleFrameListResponse.create = function create(properties) {
            return new BattleFrameListResponse(properties);
        };

        /**
         * Encodes the specified BattleFrameListResponse message. Does not implicitly {@link protocol.BattleFrameListResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {protocol.IBattleFrameListResponse} message BattleFrameListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFrameListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frameList != null && message.frameList.length)
                for (var i = 0; i < message.frameList.length; ++i)
                    $root.protocol.BattleSyncResponse.encode(message.frameList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isEnd != null && message.hasOwnProperty("isEnd"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isEnd);
            return writer;
        };

        /**
         * Encodes the specified BattleFrameListResponse message, length delimited. Does not implicitly {@link protocol.BattleFrameListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {protocol.IBattleFrameListResponse} message BattleFrameListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFrameListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleFrameListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleFrameListResponse} BattleFrameListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFrameListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleFrameListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.frameList && message.frameList.length))
                        message.frameList = [];
                    message.frameList.push($root.protocol.BattleSyncResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.isEnd = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleFrameListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleFrameListResponse} BattleFrameListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFrameListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleFrameListResponse message.
         * @function verify
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleFrameListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frameList != null && message.hasOwnProperty("frameList")) {
                if (!Array.isArray(message.frameList))
                    return "frameList: array expected";
                for (var i = 0; i < message.frameList.length; ++i) {
                    var error = $root.protocol.BattleSyncResponse.verify(message.frameList[i]);
                    if (error)
                        return "frameList." + error;
                }
            }
            if (message.isEnd != null && message.hasOwnProperty("isEnd"))
                if (typeof message.isEnd !== "boolean")
                    return "isEnd: boolean expected";
            return null;
        };

        /**
         * Creates a BattleFrameListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleFrameListResponse} BattleFrameListResponse
         */
        BattleFrameListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleFrameListResponse)
                return object;
            var message = new $root.protocol.BattleFrameListResponse();
            if (object.frameList) {
                if (!Array.isArray(object.frameList))
                    throw TypeError(".protocol.BattleFrameListResponse.frameList: array expected");
                message.frameList = [];
                for (var i = 0; i < object.frameList.length; ++i) {
                    if (typeof object.frameList[i] !== "object")
                        throw TypeError(".protocol.BattleFrameListResponse.frameList: object expected");
                    message.frameList[i] = $root.protocol.BattleSyncResponse.fromObject(object.frameList[i]);
                }
            }
            if (object.isEnd != null)
                message.isEnd = Boolean(object.isEnd);
            return message;
        };

        /**
         * Creates a plain object from a BattleFrameListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleFrameListResponse
         * @static
         * @param {protocol.BattleFrameListResponse} message BattleFrameListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleFrameListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.frameList = [];
            if (options.defaults)
                object.isEnd = false;
            if (message.frameList && message.frameList.length) {
                object.frameList = [];
                for (var j = 0; j < message.frameList.length; ++j)
                    object.frameList[j] = $root.protocol.BattleSyncResponse.toObject(message.frameList[j], options);
            }
            if (message.isEnd != null && message.hasOwnProperty("isEnd"))
                object.isEnd = message.isEnd;
            return object;
        };

        /**
         * Converts this BattleFrameListResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleFrameListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleFrameListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleFrameListResponse;
    })();

    protocol.BattleSyncRequest = (function() {

        /**
         * Properties of a BattleSyncRequest.
         * @memberof protocol
         * @interface IBattleSyncRequest
         * @property {number|Long|null} [battleId] BattleSyncRequest battleId
         * @property {Array.<protocol.IBattleMsg>|null} [msgs] BattleSyncRequest msgs
         */

        /**
         * Constructs a new BattleSyncRequest.
         * @memberof protocol
         * @classdesc Represents a BattleSyncRequest.
         * @implements IBattleSyncRequest
         * @constructor
         * @param {protocol.IBattleSyncRequest=} [properties] Properties to set
         */
        function BattleSyncRequest(properties) {
            this.msgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleSyncRequest battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleSyncRequest
         * @instance
         */
        BattleSyncRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleSyncRequest msgs.
         * @member {Array.<protocol.IBattleMsg>} msgs
         * @memberof protocol.BattleSyncRequest
         * @instance
         */
        BattleSyncRequest.prototype.msgs = $util.emptyArray;

        /**
         * Creates a new BattleSyncRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {protocol.IBattleSyncRequest=} [properties] Properties to set
         * @returns {protocol.BattleSyncRequest} BattleSyncRequest instance
         */
        BattleSyncRequest.create = function create(properties) {
            return new BattleSyncRequest(properties);
        };

        /**
         * Encodes the specified BattleSyncRequest message. Does not implicitly {@link protocol.BattleSyncRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {protocol.IBattleSyncRequest} message BattleSyncRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSyncRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            if (message.msgs != null && message.msgs.length)
                for (var i = 0; i < message.msgs.length; ++i)
                    $root.protocol.BattleMsg.encode(message.msgs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleSyncRequest message, length delimited. Does not implicitly {@link protocol.BattleSyncRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {protocol.IBattleSyncRequest} message BattleSyncRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSyncRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSyncRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleSyncRequest} BattleSyncRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSyncRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleSyncRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                case 2:
                    if (!(message.msgs && message.msgs.length))
                        message.msgs = [];
                    message.msgs.push($root.protocol.BattleMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSyncRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleSyncRequest} BattleSyncRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSyncRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSyncRequest message.
         * @function verify
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSyncRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (var i = 0; i < message.msgs.length; ++i) {
                    var error = $root.protocol.BattleMsg.verify(message.msgs[i]);
                    if (error)
                        return "msgs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleSyncRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleSyncRequest} BattleSyncRequest
         */
        BattleSyncRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleSyncRequest)
                return object;
            var message = new $root.protocol.BattleSyncRequest();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".protocol.BattleSyncRequest.msgs: array expected");
                message.msgs = [];
                for (var i = 0; i < object.msgs.length; ++i) {
                    if (typeof object.msgs[i] !== "object")
                        throw TypeError(".protocol.BattleSyncRequest.msgs: object expected");
                    message.msgs[i] = $root.protocol.BattleMsg.fromObject(object.msgs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleSyncRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleSyncRequest
         * @static
         * @param {protocol.BattleSyncRequest} message BattleSyncRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSyncRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msgs = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            if (message.msgs && message.msgs.length) {
                object.msgs = [];
                for (var j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = $root.protocol.BattleMsg.toObject(message.msgs[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleSyncRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleSyncRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSyncRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleSyncRequest;
    })();

    protocol.BattleSyncResponse = (function() {

        /**
         * Properties of a BattleSyncResponse.
         * @memberof protocol
         * @interface IBattleSyncResponse
         * @property {Array.<protocol.IBattleMsg>|null} [msgs] BattleSyncResponse msgs
         * @property {number|null} [FrameId] BattleSyncResponse FrameId
         */

        /**
         * Constructs a new BattleSyncResponse.
         * @memberof protocol
         * @classdesc Represents a BattleSyncResponse.
         * @implements IBattleSyncResponse
         * @constructor
         * @param {protocol.IBattleSyncResponse=} [properties] Properties to set
         */
        function BattleSyncResponse(properties) {
            this.msgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleSyncResponse msgs.
         * @member {Array.<protocol.IBattleMsg>} msgs
         * @memberof protocol.BattleSyncResponse
         * @instance
         */
        BattleSyncResponse.prototype.msgs = $util.emptyArray;

        /**
         * BattleSyncResponse FrameId.
         * @member {number} FrameId
         * @memberof protocol.BattleSyncResponse
         * @instance
         */
        BattleSyncResponse.prototype.FrameId = 0;

        /**
         * Creates a new BattleSyncResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {protocol.IBattleSyncResponse=} [properties] Properties to set
         * @returns {protocol.BattleSyncResponse} BattleSyncResponse instance
         */
        BattleSyncResponse.create = function create(properties) {
            return new BattleSyncResponse(properties);
        };

        /**
         * Encodes the specified BattleSyncResponse message. Does not implicitly {@link protocol.BattleSyncResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {protocol.IBattleSyncResponse} message BattleSyncResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSyncResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgs != null && message.msgs.length)
                for (var i = 0; i < message.msgs.length; ++i)
                    $root.protocol.BattleMsg.encode(message.msgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.FrameId != null && message.hasOwnProperty("FrameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FrameId);
            return writer;
        };

        /**
         * Encodes the specified BattleSyncResponse message, length delimited. Does not implicitly {@link protocol.BattleSyncResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {protocol.IBattleSyncResponse} message BattleSyncResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSyncResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSyncResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleSyncResponse} BattleSyncResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSyncResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleSyncResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.msgs && message.msgs.length))
                        message.msgs = [];
                    message.msgs.push($root.protocol.BattleMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.FrameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSyncResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleSyncResponse} BattleSyncResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSyncResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSyncResponse message.
         * @function verify
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSyncResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (var i = 0; i < message.msgs.length; ++i) {
                    var error = $root.protocol.BattleMsg.verify(message.msgs[i]);
                    if (error)
                        return "msgs." + error;
                }
            }
            if (message.FrameId != null && message.hasOwnProperty("FrameId"))
                if (!$util.isInteger(message.FrameId))
                    return "FrameId: integer expected";
            return null;
        };

        /**
         * Creates a BattleSyncResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleSyncResponse} BattleSyncResponse
         */
        BattleSyncResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleSyncResponse)
                return object;
            var message = new $root.protocol.BattleSyncResponse();
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".protocol.BattleSyncResponse.msgs: array expected");
                message.msgs = [];
                for (var i = 0; i < object.msgs.length; ++i) {
                    if (typeof object.msgs[i] !== "object")
                        throw TypeError(".protocol.BattleSyncResponse.msgs: object expected");
                    message.msgs[i] = $root.protocol.BattleMsg.fromObject(object.msgs[i]);
                }
            }
            if (object.FrameId != null)
                message.FrameId = object.FrameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleSyncResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleSyncResponse
         * @static
         * @param {protocol.BattleSyncResponse} message BattleSyncResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSyncResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msgs = [];
            if (options.defaults)
                object.FrameId = 0;
            if (message.msgs && message.msgs.length) {
                object.msgs = [];
                for (var j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = $root.protocol.BattleMsg.toObject(message.msgs[j], options);
            }
            if (message.FrameId != null && message.hasOwnProperty("FrameId"))
                object.FrameId = message.FrameId;
            return object;
        };

        /**
         * Converts this BattleSyncResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleSyncResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSyncResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleSyncResponse;
    })();

    protocol.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof protocol
         * @interface ILoginRequest
         * @property {number|null} [uid] LoginRequest uid
         * @property {string|null} [pid] LoginRequest pid
         * @property {number|null} [channel] LoginRequest channel
         * @property {string|null} [platformParams] LoginRequest platformParams
         * @property {boolean|null} [isReconnect] LoginRequest isReconnect
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof protocol
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {protocol.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest uid.
         * @member {number} uid
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.uid = 0;

        /**
         * LoginRequest pid.
         * @member {string} pid
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.pid = "";

        /**
         * LoginRequest channel.
         * @member {number} channel
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.channel = 0;

        /**
         * LoginRequest platformParams.
         * @member {string} platformParams
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.platformParams = "";

        /**
         * LoginRequest isReconnect.
         * @member {boolean} isReconnect
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.isReconnect = false;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.ILoginRequest=} [properties] Properties to set
         * @returns {protocol.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.pid != null && message.hasOwnProperty("pid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pid);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channel);
            if (message.platformParams != null && message.hasOwnProperty("platformParams"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.platformParams);
            if (message.isReconnect != null && message.hasOwnProperty("isReconnect"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isReconnect);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.pid = reader.string();
                    break;
                case 3:
                    message.channel = reader.int32();
                    break;
                case 4:
                    message.platformParams = reader.string();
                    break;
                case 5:
                    message.isReconnect = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof protocol.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.platformParams != null && message.hasOwnProperty("platformParams"))
                if (!$util.isString(message.platformParams))
                    return "platformParams: string expected";
            if (message.isReconnect != null && message.hasOwnProperty("isReconnect"))
                if (typeof message.isReconnect !== "boolean")
                    return "isReconnect: boolean expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginRequest)
                return object;
            var message = new $root.protocol.LoginRequest();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.platformParams != null)
                message.platformParams = String(object.platformParams);
            if (object.isReconnect != null)
                message.isReconnect = Boolean(object.isReconnect);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.pid = "";
                object.channel = 0;
                object.platformParams = "";
                object.isReconnect = false;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.platformParams != null && message.hasOwnProperty("platformParams"))
                object.platformParams = message.platformParams;
            if (message.isReconnect != null && message.hasOwnProperty("isReconnect"))
                object.isReconnect = message.isReconnect;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof protocol.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    protocol.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof protocol
         * @interface ILoginResponse
         * @property {boolean|null} [isNewUser] LoginResponse isNewUser
         * @property {number|null} [uid] LoginResponse uid
         * @property {protocol.ICommonUser|null} [commonUser] LoginResponse commonUser
         * @property {number|Long|null} [now] LoginResponse now
         * @property {Array.<protocol.ICommonItem>|null} [commonItemList] LoginResponse commonItemList
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof protocol
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {protocol.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            this.commonItemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse isNewUser.
         * @member {boolean} isNewUser
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.isNewUser = false;

        /**
         * LoginResponse uid.
         * @member {number} uid
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.uid = 0;

        /**
         * LoginResponse commonUser.
         * @member {protocol.ICommonUser|null|undefined} commonUser
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.commonUser = null;

        /**
         * LoginResponse now.
         * @member {number|Long} now
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.now = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginResponse commonItemList.
         * @member {Array.<protocol.ICommonItem>} commonItemList
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.commonItemList = $util.emptyArray;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.ILoginResponse=} [properties] Properties to set
         * @returns {protocol.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isNewUser != null && message.hasOwnProperty("isNewUser"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isNewUser);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.commonUser != null && message.hasOwnProperty("commonUser"))
                $root.protocol.CommonUser.encode(message.commonUser, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.now != null && message.hasOwnProperty("now"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.now);
            if (message.commonItemList != null && message.commonItemList.length)
                for (var i = 0; i < message.commonItemList.length; ++i)
                    $root.protocol.CommonItem.encode(message.commonItemList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isNewUser = reader.bool();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.commonUser = $root.protocol.CommonUser.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.now = reader.int64();
                    break;
                case 5:
                    if (!(message.commonItemList && message.commonItemList.length))
                        message.commonItemList = [];
                    message.commonItemList.push($root.protocol.CommonItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof protocol.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isNewUser != null && message.hasOwnProperty("isNewUser"))
                if (typeof message.isNewUser !== "boolean")
                    return "isNewUser: boolean expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.commonUser != null && message.hasOwnProperty("commonUser")) {
                var error = $root.protocol.CommonUser.verify(message.commonUser);
                if (error)
                    return "commonUser." + error;
            }
            if (message.now != null && message.hasOwnProperty("now"))
                if (!$util.isInteger(message.now) && !(message.now && $util.isInteger(message.now.low) && $util.isInteger(message.now.high)))
                    return "now: integer|Long expected";
            if (message.commonItemList != null && message.hasOwnProperty("commonItemList")) {
                if (!Array.isArray(message.commonItemList))
                    return "commonItemList: array expected";
                for (var i = 0; i < message.commonItemList.length; ++i) {
                    var error = $root.protocol.CommonItem.verify(message.commonItemList[i]);
                    if (error)
                        return "commonItemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginResponse)
                return object;
            var message = new $root.protocol.LoginResponse();
            if (object.isNewUser != null)
                message.isNewUser = Boolean(object.isNewUser);
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.commonUser != null) {
                if (typeof object.commonUser !== "object")
                    throw TypeError(".protocol.LoginResponse.commonUser: object expected");
                message.commonUser = $root.protocol.CommonUser.fromObject(object.commonUser);
            }
            if (object.now != null)
                if ($util.Long)
                    (message.now = $util.Long.fromValue(object.now)).unsigned = false;
                else if (typeof object.now === "string")
                    message.now = parseInt(object.now, 10);
                else if (typeof object.now === "number")
                    message.now = object.now;
                else if (typeof object.now === "object")
                    message.now = new $util.LongBits(object.now.low >>> 0, object.now.high >>> 0).toNumber();
            if (object.commonItemList) {
                if (!Array.isArray(object.commonItemList))
                    throw TypeError(".protocol.LoginResponse.commonItemList: array expected");
                message.commonItemList = [];
                for (var i = 0; i < object.commonItemList.length; ++i) {
                    if (typeof object.commonItemList[i] !== "object")
                        throw TypeError(".protocol.LoginResponse.commonItemList: object expected");
                    message.commonItemList[i] = $root.protocol.CommonItem.fromObject(object.commonItemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commonItemList = [];
            if (options.defaults) {
                object.isNewUser = false;
                object.uid = 0;
                object.commonUser = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.now = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.now = options.longs === String ? "0" : 0;
            }
            if (message.isNewUser != null && message.hasOwnProperty("isNewUser"))
                object.isNewUser = message.isNewUser;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.commonUser != null && message.hasOwnProperty("commonUser"))
                object.commonUser = $root.protocol.CommonUser.toObject(message.commonUser, options);
            if (message.now != null && message.hasOwnProperty("now"))
                if (typeof message.now === "number")
                    object.now = options.longs === String ? String(message.now) : message.now;
                else
                    object.now = options.longs === String ? $util.Long.prototype.toString.call(message.now) : options.longs === Number ? new $util.LongBits(message.now.low >>> 0, message.now.high >>> 0).toNumber() : message.now;
            if (message.commonItemList && message.commonItemList.length) {
                object.commonItemList = [];
                for (var j = 0; j < message.commonItemList.length; ++j)
                    object.commonItemList[j] = $root.protocol.CommonItem.toObject(message.commonItemList[j], options);
            }
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof protocol.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    protocol.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protocol
         * @interface IMessage
         * @property {protocol.MSG|null} [type] Message type
         * @property {number|null} [uid] Message uid
         * @property {protocol.IRequest|null} [request] Message request
         * @property {protocol.IResponse|null} [response] Message response
         * @property {number|null} [seq] Message seq
         * @property {boolean|null} [isVerify] Message isVerify
         */

        /**
         * Constructs a new Message.
         * @memberof protocol
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {protocol.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message type.
         * @member {protocol.MSG} type
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Message uid.
         * @member {number} uid
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.uid = 0;

        /**
         * Message request.
         * @member {protocol.IRequest|null|undefined} request
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.request = null;

        /**
         * Message response.
         * @member {protocol.IResponse|null|undefined} response
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.response = null;

        /**
         * Message seq.
         * @member {number} seq
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.seq = 0;

        /**
         * Message isVerify.
         * @member {boolean} isVerify
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.isVerify = false;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage=} [properties] Properties to set
         * @returns {protocol.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @function encode
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.request != null && message.hasOwnProperty("request"))
                $root.protocol.Request.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response"))
                $root.protocol.Response.encode(message.response, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seq);
            if (message.isVerify != null && message.hasOwnProperty("isVerify"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isVerify);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.request = $root.protocol.Request.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.response = $root.protocol.Response.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.seq = reader.int32();
                    break;
                case 6:
                    message.isVerify = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protocol.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1000:
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                case 1009:
                case 2001:
                case 2002:
                case 2003:
                case 2004:
                case 2005:
                case 2006:
                case 2007:
                case 2008:
                case 2009:
                case 2010:
                case 2011:
                case 2012:
                case 2013:
                case 2014:
                case 2015:
                case 3000:
                case 3002:
                case 3003:
                case 3004:
                case 3005:
                case 3006:
                case 3007:
                case 3008:
                    break;
                }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.request != null && message.hasOwnProperty("request")) {
                var error = $root.protocol.Request.verify(message.request);
                if (error)
                    return "request." + error;
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                var error = $root.protocol.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.isVerify != null && message.hasOwnProperty("isVerify"))
                if (typeof message.isVerify !== "boolean")
                    return "isVerify: boolean expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Message)
                return object;
            var message = new $root.protocol.Message();
            switch (object.type) {
            case "Default":
            case 0:
                message.type = 0;
                break;
            case "BattleLogin":
            case 1000:
                message.type = 1000;
                break;
            case "BattleSync":
            case 1001:
                message.type = 1001;
                break;
            case "BattleTimeout":
            case 1002:
                message.type = 1002;
                break;
            case "BattleStatus":
            case 1003:
                message.type = 1003;
                break;
            case "BattleLoading":
            case 1004:
                message.type = 1004;
                break;
            case "BattleFinish":
            case 1005:
                message.type = 1005;
                break;
            case "BattleHeartbeat":
            case 1006:
                message.type = 1006;
                break;
            case "BattleReLogin":
            case 1007:
                message.type = 1007;
                break;
            case "BattleFrameList":
            case 1008:
                message.type = 1008;
                break;
            case "BattleJoin":
            case 1009:
                message.type = 1009;
                break;
            case "TeamExit":
            case 2001:
                message.type = 2001;
                break;
            case "TeamList":
            case 2002:
                message.type = 2002;
                break;
            case "MatchBattleInfo":
            case 2003:
                message.type = 2003;
                break;
            case "TeamBeginMatch":
            case 2004:
                message.type = 2004;
                break;
            case "TeamDelMatch":
            case 2005:
                message.type = 2005;
                break;
            case "TeamRobotAdd":
            case 2006:
                message.type = 2006;
                break;
            case "TeamRobotRemove":
            case 2007:
                message.type = 2007;
                break;
            case "TeamPosChange":
            case 2008:
                message.type = 2008;
                break;
            case "TeamReady":
            case 2009:
                message.type = 2009;
                break;
            case "TeamCreate":
            case 2010:
                message.type = 2010;
                break;
            case "TeamApply":
            case 2011:
                message.type = 2011;
                break;
            case "TeamByApply":
            case 2012:
                message.type = 2012;
                break;
            case "TeamJoin":
            case 2013:
                message.type = 2013;
                break;
            case "TeamRefuse":
            case 2014:
                message.type = 2014;
                break;
            case "TeamByRefuse":
            case 2015:
                message.type = 2015;
                break;
            case "Login":
            case 3000:
                message.type = 3000;
                break;
            case "Kick":
            case 3002:
                message.type = 3002;
                break;
            case "Notice":
            case 3003:
                message.type = 3003;
                break;
            case "ClientError":
            case 3004:
                message.type = 3004;
                break;
            case "Heartbeat":
            case 3005:
                message.type = 3005;
                break;
            case "HeroBuy":
            case 3006:
                message.type = 3006;
                break;
            case "BattleEnd":
            case 3007:
                message.type = 3007;
                break;
            case "BattleStart":
            case 3008:
                message.type = 3008;
                break;
            }
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.request != null) {
                if (typeof object.request !== "object")
                    throw TypeError(".protocol.Message.request: object expected");
                message.request = $root.protocol.Request.fromObject(object.request);
            }
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".protocol.Message.response: object expected");
                message.response = $root.protocol.Response.fromObject(object.response);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.isVerify != null)
                message.isVerify = Boolean(object.isVerify);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Message
         * @static
         * @param {protocol.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Default" : 0;
                object.uid = 0;
                object.request = null;
                object.response = null;
                object.seq = 0;
                object.isVerify = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.protocol.MSG[message.type] : message.type;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = $root.protocol.Request.toObject(message.request, options);
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = $root.protocol.Response.toObject(message.response, options);
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.isVerify != null && message.hasOwnProperty("isVerify"))
                object.isVerify = message.isVerify;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof protocol.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    protocol.BattleMsg = (function() {

        /**
         * Properties of a BattleMsg.
         * @memberof protocol
         * @interface IBattleMsg
         * @property {number|null} [uid] BattleMsg uid
         * @property {number|null} [hId] BattleMsg hId
         * @property {number|null} [ctrl] BattleMsg ctrl
         * @property {number|null} [val] BattleMsg val
         */

        /**
         * Constructs a new BattleMsg.
         * @memberof protocol
         * @classdesc Represents a BattleMsg.
         * @implements IBattleMsg
         * @constructor
         * @param {protocol.IBattleMsg=} [properties] Properties to set
         */
        function BattleMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleMsg uid.
         * @member {number} uid
         * @memberof protocol.BattleMsg
         * @instance
         */
        BattleMsg.prototype.uid = 0;

        /**
         * BattleMsg hId.
         * @member {number} hId
         * @memberof protocol.BattleMsg
         * @instance
         */
        BattleMsg.prototype.hId = 0;

        /**
         * BattleMsg ctrl.
         * @member {number} ctrl
         * @memberof protocol.BattleMsg
         * @instance
         */
        BattleMsg.prototype.ctrl = 0;

        /**
         * BattleMsg val.
         * @member {number} val
         * @memberof protocol.BattleMsg
         * @instance
         */
        BattleMsg.prototype.val = 0;

        /**
         * Creates a new BattleMsg instance using the specified properties.
         * @function create
         * @memberof protocol.BattleMsg
         * @static
         * @param {protocol.IBattleMsg=} [properties] Properties to set
         * @returns {protocol.BattleMsg} BattleMsg instance
         */
        BattleMsg.create = function create(properties) {
            return new BattleMsg(properties);
        };

        /**
         * Encodes the specified BattleMsg message. Does not implicitly {@link protocol.BattleMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleMsg
         * @static
         * @param {protocol.IBattleMsg} message BattleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.hId != null && message.hasOwnProperty("hId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hId);
            if (message.ctrl != null && message.hasOwnProperty("ctrl"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ctrl);
            if (message.val != null && message.hasOwnProperty("val"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.val);
            return writer;
        };

        /**
         * Encodes the specified BattleMsg message, length delimited. Does not implicitly {@link protocol.BattleMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleMsg
         * @static
         * @param {protocol.IBattleMsg} message BattleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleMsg} BattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.hId = reader.int32();
                    break;
                case 3:
                    message.ctrl = reader.int32();
                    break;
                case 4:
                    message.val = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleMsg} BattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleMsg message.
         * @function verify
         * @memberof protocol.BattleMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.hId != null && message.hasOwnProperty("hId"))
                if (!$util.isInteger(message.hId))
                    return "hId: integer expected";
            if (message.ctrl != null && message.hasOwnProperty("ctrl"))
                if (!$util.isInteger(message.ctrl))
                    return "ctrl: integer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val))
                    return "val: integer expected";
            return null;
        };

        /**
         * Creates a BattleMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleMsg} BattleMsg
         */
        BattleMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleMsg)
                return object;
            var message = new $root.protocol.BattleMsg();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.hId != null)
                message.hId = object.hId | 0;
            if (object.ctrl != null)
                message.ctrl = object.ctrl | 0;
            if (object.val != null)
                message.val = object.val | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleMsg
         * @static
         * @param {protocol.BattleMsg} message BattleMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.hId = 0;
                object.ctrl = 0;
                object.val = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.hId != null && message.hasOwnProperty("hId"))
                object.hId = message.hId;
            if (message.ctrl != null && message.hasOwnProperty("ctrl"))
                object.ctrl = message.ctrl;
            if (message.val != null && message.hasOwnProperty("val"))
                object.val = message.val;
            return object;
        };

        /**
         * Converts this BattleMsg to JSON.
         * @function toJSON
         * @memberof protocol.BattleMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleMsg;
    })();

    protocol.BattleUser = (function() {

        /**
         * Properties of a BattleUser.
         * @memberof protocol
         * @interface IBattleUser
         * @property {number|null} [uid] BattleUser uid
         * @property {protocol.BATTLE_STATUS|null} [status] BattleUser status
         * @property {number|null} [percent] BattleUser percent
         */

        /**
         * Constructs a new BattleUser.
         * @memberof protocol
         * @classdesc Represents a BattleUser.
         * @implements IBattleUser
         * @constructor
         * @param {protocol.IBattleUser=} [properties] Properties to set
         */
        function BattleUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleUser uid.
         * @member {number} uid
         * @memberof protocol.BattleUser
         * @instance
         */
        BattleUser.prototype.uid = 0;

        /**
         * BattleUser status.
         * @member {protocol.BATTLE_STATUS} status
         * @memberof protocol.BattleUser
         * @instance
         */
        BattleUser.prototype.status = 0;

        /**
         * BattleUser percent.
         * @member {number} percent
         * @memberof protocol.BattleUser
         * @instance
         */
        BattleUser.prototype.percent = 0;

        /**
         * Creates a new BattleUser instance using the specified properties.
         * @function create
         * @memberof protocol.BattleUser
         * @static
         * @param {protocol.IBattleUser=} [properties] Properties to set
         * @returns {protocol.BattleUser} BattleUser instance
         */
        BattleUser.create = function create(properties) {
            return new BattleUser(properties);
        };

        /**
         * Encodes the specified BattleUser message. Does not implicitly {@link protocol.BattleUser.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleUser
         * @static
         * @param {protocol.IBattleUser} message BattleUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.percent != null && message.hasOwnProperty("percent"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.percent);
            return writer;
        };

        /**
         * Encodes the specified BattleUser message, length delimited. Does not implicitly {@link protocol.BattleUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleUser
         * @static
         * @param {protocol.IBattleUser} message BattleUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleUser message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleUser} BattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.percent = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleUser} BattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleUser message.
         * @function verify
         * @memberof protocol.BattleUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.percent != null && message.hasOwnProperty("percent"))
                if (!$util.isInteger(message.percent))
                    return "percent: integer expected";
            return null;
        };

        /**
         * Creates a BattleUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleUser} BattleUser
         */
        BattleUser.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleUser)
                return object;
            var message = new $root.protocol.BattleUser();
            if (object.uid != null)
                message.uid = object.uid | 0;
            switch (object.status) {
            case "LOADING":
            case 0:
                message.status = 0;
                break;
            case "BEGIN":
            case 1:
                message.status = 1;
                break;
            case "END":
            case 2:
                message.status = 2;
                break;
            }
            if (object.percent != null)
                message.percent = object.percent | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleUser
         * @static
         * @param {protocol.BattleUser} message BattleUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.status = options.enums === String ? "LOADING" : 0;
                object.percent = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.protocol.BATTLE_STATUS[message.status] : message.status;
            if (message.percent != null && message.hasOwnProperty("percent"))
                object.percent = message.percent;
            return object;
        };

        /**
         * Converts this BattleUser to JSON.
         * @function toJSON
         * @memberof protocol.BattleUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleUser;
    })();

    protocol.BattleData = (function() {

        /**
         * Properties of a BattleData.
         * @memberof protocol
         * @interface IBattleData
         * @property {string|null} [name] BattleData name
         * @property {string|null} [headImage] BattleData headImage
         * @property {number|null} [rate] BattleData rate
         * @property {number|null} [maxRankId] BattleData maxRankId
         * @property {number|null} [heroId] BattleData heroId
         * @property {number|null} [maxRankScore] BattleData maxRankScore
         * @property {number|null} [headBoxId] BattleData headBoxId
         */

        /**
         * Constructs a new BattleData.
         * @memberof protocol
         * @classdesc Represents a BattleData.
         * @implements IBattleData
         * @constructor
         * @param {protocol.IBattleData=} [properties] Properties to set
         */
        function BattleData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleData name.
         * @member {string} name
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.name = "";

        /**
         * BattleData headImage.
         * @member {string} headImage
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.headImage = "";

        /**
         * BattleData rate.
         * @member {number} rate
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.rate = 0;

        /**
         * BattleData maxRankId.
         * @member {number} maxRankId
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.maxRankId = 0;

        /**
         * BattleData heroId.
         * @member {number} heroId
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.heroId = 0;

        /**
         * BattleData maxRankScore.
         * @member {number} maxRankScore
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.maxRankScore = 0;

        /**
         * BattleData headBoxId.
         * @member {number} headBoxId
         * @memberof protocol.BattleData
         * @instance
         */
        BattleData.prototype.headBoxId = 0;

        /**
         * Creates a new BattleData instance using the specified properties.
         * @function create
         * @memberof protocol.BattleData
         * @static
         * @param {protocol.IBattleData=} [properties] Properties to set
         * @returns {protocol.BattleData} BattleData instance
         */
        BattleData.create = function create(properties) {
            return new BattleData(properties);
        };

        /**
         * Encodes the specified BattleData message. Does not implicitly {@link protocol.BattleData.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleData
         * @static
         * @param {protocol.IBattleData} message BattleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.headImage);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.rate);
            if (message.maxRankId != null && message.hasOwnProperty("maxRankId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxRankId);
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.heroId);
            if (message.maxRankScore != null && message.hasOwnProperty("maxRankScore"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.maxRankScore);
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.headBoxId);
            return writer;
        };

        /**
         * Encodes the specified BattleData message, length delimited. Does not implicitly {@link protocol.BattleData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleData
         * @static
         * @param {protocol.IBattleData} message BattleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleData} BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.headImage = reader.string();
                    break;
                case 4:
                    message.rate = reader.double();
                    break;
                case 6:
                    message.maxRankId = reader.int32();
                    break;
                case 7:
                    message.heroId = reader.int32();
                    break;
                case 13:
                    message.maxRankScore = reader.int32();
                    break;
                case 14:
                    message.headBoxId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleData} BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleData message.
         * @function verify
         * @memberof protocol.BattleData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                if (!$util.isString(message.headImage))
                    return "headImage: string expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (typeof message.rate !== "number")
                    return "rate: number expected";
            if (message.maxRankId != null && message.hasOwnProperty("maxRankId"))
                if (!$util.isInteger(message.maxRankId))
                    return "maxRankId: integer expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.maxRankScore != null && message.hasOwnProperty("maxRankScore"))
                if (!$util.isInteger(message.maxRankScore))
                    return "maxRankScore: integer expected";
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                if (!$util.isInteger(message.headBoxId))
                    return "headBoxId: integer expected";
            return null;
        };

        /**
         * Creates a BattleData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleData} BattleData
         */
        BattleData.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleData)
                return object;
            var message = new $root.protocol.BattleData();
            if (object.name != null)
                message.name = String(object.name);
            if (object.headImage != null)
                message.headImage = String(object.headImage);
            if (object.rate != null)
                message.rate = Number(object.rate);
            if (object.maxRankId != null)
                message.maxRankId = object.maxRankId | 0;
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.maxRankScore != null)
                message.maxRankScore = object.maxRankScore | 0;
            if (object.headBoxId != null)
                message.headBoxId = object.headBoxId | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleData
         * @static
         * @param {protocol.BattleData} message BattleData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.headImage = "";
                object.rate = 0;
                object.maxRankId = 0;
                object.heroId = 0;
                object.maxRankScore = 0;
                object.headBoxId = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                object.headImage = message.headImage;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = options.json && !isFinite(message.rate) ? String(message.rate) : message.rate;
            if (message.maxRankId != null && message.hasOwnProperty("maxRankId"))
                object.maxRankId = message.maxRankId;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.maxRankScore != null && message.hasOwnProperty("maxRankScore"))
                object.maxRankScore = message.maxRankScore;
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                object.headBoxId = message.headBoxId;
            return object;
        };

        /**
         * Converts this BattleData to JSON.
         * @function toJSON
         * @memberof protocol.BattleData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleData;
    })();

    protocol.TeamUser = (function() {

        /**
         * Properties of a TeamUser.
         * @memberof protocol
         * @interface ITeamUser
         * @property {protocol.ITeamBattleUser|null} [user] TeamUser user
         * @property {boolean|null} [isReady] TeamUser isReady
         * @property {boolean|null} [isLeader] TeamUser isLeader
         */

        /**
         * Constructs a new TeamUser.
         * @memberof protocol
         * @classdesc Represents a TeamUser.
         * @implements ITeamUser
         * @constructor
         * @param {protocol.ITeamUser=} [properties] Properties to set
         */
        function TeamUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamUser user.
         * @member {protocol.ITeamBattleUser|null|undefined} user
         * @memberof protocol.TeamUser
         * @instance
         */
        TeamUser.prototype.user = null;

        /**
         * TeamUser isReady.
         * @member {boolean} isReady
         * @memberof protocol.TeamUser
         * @instance
         */
        TeamUser.prototype.isReady = false;

        /**
         * TeamUser isLeader.
         * @member {boolean} isLeader
         * @memberof protocol.TeamUser
         * @instance
         */
        TeamUser.prototype.isLeader = false;

        /**
         * Creates a new TeamUser instance using the specified properties.
         * @function create
         * @memberof protocol.TeamUser
         * @static
         * @param {protocol.ITeamUser=} [properties] Properties to set
         * @returns {protocol.TeamUser} TeamUser instance
         */
        TeamUser.create = function create(properties) {
            return new TeamUser(properties);
        };

        /**
         * Encodes the specified TeamUser message. Does not implicitly {@link protocol.TeamUser.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamUser
         * @static
         * @param {protocol.ITeamUser} message TeamUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.protocol.TeamBattleUser.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReady);
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isLeader);
            return writer;
        };

        /**
         * Encodes the specified TeamUser message, length delimited. Does not implicitly {@link protocol.TeamUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamUser
         * @static
         * @param {protocol.ITeamUser} message TeamUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamUser message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamUser} TeamUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.protocol.TeamBattleUser.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.isReady = reader.bool();
                    break;
                case 3:
                    message.isLeader = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamUser} TeamUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamUser message.
         * @function verify
         * @memberof protocol.TeamUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.protocol.TeamBattleUser.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                if (typeof message.isLeader !== "boolean")
                    return "isLeader: boolean expected";
            return null;
        };

        /**
         * Creates a TeamUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamUser} TeamUser
         */
        TeamUser.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamUser)
                return object;
            var message = new $root.protocol.TeamUser();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".protocol.TeamUser.user: object expected");
                message.user = $root.protocol.TeamBattleUser.fromObject(object.user);
            }
            if (object.isReady != null)
                message.isReady = Boolean(object.isReady);
            if (object.isLeader != null)
                message.isLeader = Boolean(object.isLeader);
            return message;
        };

        /**
         * Creates a plain object from a TeamUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamUser
         * @static
         * @param {protocol.TeamUser} message TeamUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                object.isReady = false;
                object.isLeader = false;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.protocol.TeamBattleUser.toObject(message.user, options);
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                object.isReady = message.isReady;
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                object.isLeader = message.isLeader;
            return object;
        };

        /**
         * Converts this TeamUser to JSON.
         * @function toJSON
         * @memberof protocol.TeamUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamUser;
    })();

    protocol.TeamBattleUser = (function() {

        /**
         * Properties of a TeamBattleUser.
         * @memberof protocol
         * @interface ITeamBattleUser
         * @property {number|null} [uid] TeamBattleUser uid
         * @property {boolean|null} [isRobot] TeamBattleUser isRobot
         * @property {protocol.IBattleData|null} [battleData] TeamBattleUser battleData
         * @property {number|null} [tId] TeamBattleUser tId
         * @property {number|null} [pos] TeamBattleUser pos
         */

        /**
         * Constructs a new TeamBattleUser.
         * @memberof protocol
         * @classdesc Represents a TeamBattleUser.
         * @implements ITeamBattleUser
         * @constructor
         * @param {protocol.ITeamBattleUser=} [properties] Properties to set
         */
        function TeamBattleUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamBattleUser uid.
         * @member {number} uid
         * @memberof protocol.TeamBattleUser
         * @instance
         */
        TeamBattleUser.prototype.uid = 0;

        /**
         * TeamBattleUser isRobot.
         * @member {boolean} isRobot
         * @memberof protocol.TeamBattleUser
         * @instance
         */
        TeamBattleUser.prototype.isRobot = false;

        /**
         * TeamBattleUser battleData.
         * @member {protocol.IBattleData|null|undefined} battleData
         * @memberof protocol.TeamBattleUser
         * @instance
         */
        TeamBattleUser.prototype.battleData = null;

        /**
         * TeamBattleUser tId.
         * @member {number} tId
         * @memberof protocol.TeamBattleUser
         * @instance
         */
        TeamBattleUser.prototype.tId = 0;

        /**
         * TeamBattleUser pos.
         * @member {number} pos
         * @memberof protocol.TeamBattleUser
         * @instance
         */
        TeamBattleUser.prototype.pos = 0;

        /**
         * Creates a new TeamBattleUser instance using the specified properties.
         * @function create
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {protocol.ITeamBattleUser=} [properties] Properties to set
         * @returns {protocol.TeamBattleUser} TeamBattleUser instance
         */
        TeamBattleUser.create = function create(properties) {
            return new TeamBattleUser(properties);
        };

        /**
         * Encodes the specified TeamBattleUser message. Does not implicitly {@link protocol.TeamBattleUser.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {protocol.ITeamBattleUser} message TeamBattleUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamBattleUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.isRobot != null && message.hasOwnProperty("isRobot"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isRobot);
            if (message.battleData != null && message.hasOwnProperty("battleData"))
                $root.protocol.BattleData.encode(message.battleData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.tId != null && message.hasOwnProperty("tId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tId);
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pos);
            return writer;
        };

        /**
         * Encodes the specified TeamBattleUser message, length delimited. Does not implicitly {@link protocol.TeamBattleUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {protocol.ITeamBattleUser} message TeamBattleUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamBattleUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamBattleUser message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamBattleUser} TeamBattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamBattleUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamBattleUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.isRobot = reader.bool();
                    break;
                case 3:
                    message.battleData = $root.protocol.BattleData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tId = reader.int32();
                    break;
                case 5:
                    message.pos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamBattleUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamBattleUser} TeamBattleUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamBattleUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamBattleUser message.
         * @function verify
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamBattleUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.isRobot != null && message.hasOwnProperty("isRobot"))
                if (typeof message.isRobot !== "boolean")
                    return "isRobot: boolean expected";
            if (message.battleData != null && message.hasOwnProperty("battleData")) {
                var error = $root.protocol.BattleData.verify(message.battleData);
                if (error)
                    return "battleData." + error;
            }
            if (message.tId != null && message.hasOwnProperty("tId"))
                if (!$util.isInteger(message.tId))
                    return "tId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            return null;
        };

        /**
         * Creates a TeamBattleUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamBattleUser} TeamBattleUser
         */
        TeamBattleUser.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamBattleUser)
                return object;
            var message = new $root.protocol.TeamBattleUser();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.isRobot != null)
                message.isRobot = Boolean(object.isRobot);
            if (object.battleData != null) {
                if (typeof object.battleData !== "object")
                    throw TypeError(".protocol.TeamBattleUser.battleData: object expected");
                message.battleData = $root.protocol.BattleData.fromObject(object.battleData);
            }
            if (object.tId != null)
                message.tId = object.tId | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamBattleUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamBattleUser
         * @static
         * @param {protocol.TeamBattleUser} message TeamBattleUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamBattleUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.isRobot = false;
                object.battleData = null;
                object.tId = 0;
                object.pos = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.isRobot != null && message.hasOwnProperty("isRobot"))
                object.isRobot = message.isRobot;
            if (message.battleData != null && message.hasOwnProperty("battleData"))
                object.battleData = $root.protocol.BattleData.toObject(message.battleData, options);
            if (message.tId != null && message.hasOwnProperty("tId"))
                object.tId = message.tId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            return object;
        };

        /**
         * Converts this TeamBattleUser to JSON.
         * @function toJSON
         * @memberof protocol.TeamBattleUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamBattleUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamBattleUser;
    })();

    /**
     * BATTLE_STATUS enum.
     * @name protocol.BATTLE_STATUS
     * @enum {string}
     * @property {number} LOADING=0 LOADING value
     * @property {number} BEGIN=1 BEGIN value
     * @property {number} END=2 END value
     */
    protocol.BATTLE_STATUS = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LOADING"] = 0;
        values[valuesById[1] = "BEGIN"] = 1;
        values[valuesById[2] = "END"] = 2;
        return values;
    })();

    /**
     * TEAM_TYPE enum.
     * @name protocol.TEAM_TYPE
     * @enum {string}
     * @property {number} NORMAL__=0 NORMAL__ value
     * @property {number} DIY=1 DIY value
     */
    protocol.TEAM_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL__"] = 0;
        values[valuesById[1] = "DIY"] = 1;
        return values;
    })();

    protocol.TeamListResponse = (function() {

        /**
         * Properties of a TeamListResponse.
         * @memberof protocol
         * @interface ITeamListResponse
         * @property {Array.<protocol.ITeamUser>|null} [userList] TeamListResponse userList
         */

        /**
         * Constructs a new TeamListResponse.
         * @memberof protocol
         * @classdesc Represents a TeamListResponse.
         * @implements ITeamListResponse
         * @constructor
         * @param {protocol.ITeamListResponse=} [properties] Properties to set
         */
        function TeamListResponse(properties) {
            this.userList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamListResponse userList.
         * @member {Array.<protocol.ITeamUser>} userList
         * @memberof protocol.TeamListResponse
         * @instance
         */
        TeamListResponse.prototype.userList = $util.emptyArray;

        /**
         * Creates a new TeamListResponse instance using the specified properties.
         * @function create
         * @memberof protocol.TeamListResponse
         * @static
         * @param {protocol.ITeamListResponse=} [properties] Properties to set
         * @returns {protocol.TeamListResponse} TeamListResponse instance
         */
        TeamListResponse.create = function create(properties) {
            return new TeamListResponse(properties);
        };

        /**
         * Encodes the specified TeamListResponse message. Does not implicitly {@link protocol.TeamListResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamListResponse
         * @static
         * @param {protocol.ITeamListResponse} message TeamListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userList != null && message.userList.length)
                for (var i = 0; i < message.userList.length; ++i)
                    $root.protocol.TeamUser.encode(message.userList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TeamListResponse message, length delimited. Does not implicitly {@link protocol.TeamListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamListResponse
         * @static
         * @param {protocol.ITeamListResponse} message TeamListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamListResponse} TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    message.userList.push($root.protocol.TeamUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamListResponse} TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamListResponse message.
         * @function verify
         * @memberof protocol.TeamListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userList != null && message.hasOwnProperty("userList")) {
                if (!Array.isArray(message.userList))
                    return "userList: array expected";
                for (var i = 0; i < message.userList.length; ++i) {
                    var error = $root.protocol.TeamUser.verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TeamListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamListResponse} TeamListResponse
         */
        TeamListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamListResponse)
                return object;
            var message = new $root.protocol.TeamListResponse();
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".protocol.TeamListResponse.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".protocol.TeamListResponse.userList: object expected");
                    message.userList[i] = $root.protocol.TeamUser.fromObject(object.userList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamListResponse
         * @static
         * @param {protocol.TeamListResponse} message TeamListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userList = [];
            if (message.userList && message.userList.length) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    object.userList[j] = $root.protocol.TeamUser.toObject(message.userList[j], options);
            }
            return object;
        };

        /**
         * Converts this TeamListResponse to JSON.
         * @function toJSON
         * @memberof protocol.TeamListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamListResponse;
    })();

    protocol.MatchBattleInfoResponse = (function() {

        /**
         * Properties of a MatchBattleInfoResponse.
         * @memberof protocol
         * @interface IMatchBattleInfoResponse
         * @property {number|Long|null} [battleId] MatchBattleInfoResponse battleId
         * @property {string|null} [ip] MatchBattleInfoResponse ip
         * @property {number|null} [port] MatchBattleInfoResponse port
         * @property {Array.<protocol.ITeamBattleUser>|null} [userList] MatchBattleInfoResponse userList
         * @property {protocol.BATTLE_TYPE|null} [battleType] MatchBattleInfoResponse battleType
         * @property {boolean|null} [IsLimit] MatchBattleInfoResponse IsLimit
         * @property {number|null} [battleServerId] MatchBattleInfoResponse battleServerId
         * @property {number|null} [wsPort] MatchBattleInfoResponse wsPort
         * @property {protocol.TEAM_TYPE|null} [teamType] MatchBattleInfoResponse teamType
         */

        /**
         * Constructs a new MatchBattleInfoResponse.
         * @memberof protocol
         * @classdesc Represents a MatchBattleInfoResponse.
         * @implements IMatchBattleInfoResponse
         * @constructor
         * @param {protocol.IMatchBattleInfoResponse=} [properties] Properties to set
         */
        function MatchBattleInfoResponse(properties) {
            this.userList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchBattleInfoResponse battleId.
         * @member {number|Long} battleId
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MatchBattleInfoResponse ip.
         * @member {string} ip
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.ip = "";

        /**
         * MatchBattleInfoResponse port.
         * @member {number} port
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.port = 0;

        /**
         * MatchBattleInfoResponse userList.
         * @member {Array.<protocol.ITeamBattleUser>} userList
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.userList = $util.emptyArray;

        /**
         * MatchBattleInfoResponse battleType.
         * @member {protocol.BATTLE_TYPE} battleType
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.battleType = 0;

        /**
         * MatchBattleInfoResponse IsLimit.
         * @member {boolean} IsLimit
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.IsLimit = false;

        /**
         * MatchBattleInfoResponse battleServerId.
         * @member {number} battleServerId
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.battleServerId = 0;

        /**
         * MatchBattleInfoResponse wsPort.
         * @member {number} wsPort
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.wsPort = 0;

        /**
         * MatchBattleInfoResponse teamType.
         * @member {protocol.TEAM_TYPE} teamType
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         */
        MatchBattleInfoResponse.prototype.teamType = 0;

        /**
         * Creates a new MatchBattleInfoResponse instance using the specified properties.
         * @function create
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {protocol.IMatchBattleInfoResponse=} [properties] Properties to set
         * @returns {protocol.MatchBattleInfoResponse} MatchBattleInfoResponse instance
         */
        MatchBattleInfoResponse.create = function create(properties) {
            return new MatchBattleInfoResponse(properties);
        };

        /**
         * Encodes the specified MatchBattleInfoResponse message. Does not implicitly {@link protocol.MatchBattleInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {protocol.IMatchBattleInfoResponse} message MatchBattleInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchBattleInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
            if (message.userList != null && message.userList.length)
                for (var i = 0; i < message.userList.length; ++i)
                    $root.protocol.TeamBattleUser.encode(message.userList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.battleType);
            if (message.IsLimit != null && message.hasOwnProperty("IsLimit"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.IsLimit);
            if (message.battleServerId != null && message.hasOwnProperty("battleServerId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.battleServerId);
            if (message.wsPort != null && message.hasOwnProperty("wsPort"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.wsPort);
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.teamType);
            return writer;
        };

        /**
         * Encodes the specified MatchBattleInfoResponse message, length delimited. Does not implicitly {@link protocol.MatchBattleInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {protocol.IMatchBattleInfoResponse} message MatchBattleInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchBattleInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchBattleInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MatchBattleInfoResponse} MatchBattleInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchBattleInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MatchBattleInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.int32();
                    break;
                case 4:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    message.userList.push($root.protocol.TeamBattleUser.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.battleType = reader.int32();
                    break;
                case 6:
                    message.IsLimit = reader.bool();
                    break;
                case 7:
                    message.battleServerId = reader.int32();
                    break;
                case 8:
                    message.wsPort = reader.int32();
                    break;
                case 9:
                    message.teamType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchBattleInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MatchBattleInfoResponse} MatchBattleInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchBattleInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchBattleInfoResponse message.
         * @function verify
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchBattleInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.userList != null && message.hasOwnProperty("userList")) {
                if (!Array.isArray(message.userList))
                    return "userList: array expected";
                for (var i = 0; i < message.userList.length; ++i) {
                    var error = $root.protocol.TeamBattleUser.verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                switch (message.battleType) {
                default:
                    return "battleType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.IsLimit != null && message.hasOwnProperty("IsLimit"))
                if (typeof message.IsLimit !== "boolean")
                    return "IsLimit: boolean expected";
            if (message.battleServerId != null && message.hasOwnProperty("battleServerId"))
                if (!$util.isInteger(message.battleServerId))
                    return "battleServerId: integer expected";
            if (message.wsPort != null && message.hasOwnProperty("wsPort"))
                if (!$util.isInteger(message.wsPort))
                    return "wsPort: integer expected";
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                switch (message.teamType) {
                default:
                    return "teamType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a MatchBattleInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MatchBattleInfoResponse} MatchBattleInfoResponse
         */
        MatchBattleInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MatchBattleInfoResponse)
                return object;
            var message = new $root.protocol.MatchBattleInfoResponse();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".protocol.MatchBattleInfoResponse.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".protocol.MatchBattleInfoResponse.userList: object expected");
                    message.userList[i] = $root.protocol.TeamBattleUser.fromObject(object.userList[i]);
                }
            }
            switch (object.battleType) {
            case "ALL":
            case 0:
                message.battleType = 0;
                break;
            case "CASUAL":
            case 1:
                message.battleType = 1;
                break;
            case "JUNIOR":
            case 2:
                message.battleType = 2;
                break;
            case "SENIOR":
            case 3:
                message.battleType = 3;
                break;
            }
            if (object.IsLimit != null)
                message.IsLimit = Boolean(object.IsLimit);
            if (object.battleServerId != null)
                message.battleServerId = object.battleServerId | 0;
            if (object.wsPort != null)
                message.wsPort = object.wsPort | 0;
            switch (object.teamType) {
            case "NORMAL__":
            case 0:
                message.teamType = 0;
                break;
            case "DIY":
            case 1:
                message.teamType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MatchBattleInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MatchBattleInfoResponse
         * @static
         * @param {protocol.MatchBattleInfoResponse} message MatchBattleInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchBattleInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
                object.ip = "";
                object.port = 0;
                object.battleType = options.enums === String ? "ALL" : 0;
                object.IsLimit = false;
                object.battleServerId = 0;
                object.wsPort = 0;
                object.teamType = options.enums === String ? "NORMAL__" : 0;
            }
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.userList && message.userList.length) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    object.userList[j] = $root.protocol.TeamBattleUser.toObject(message.userList[j], options);
            }
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                object.battleType = options.enums === String ? $root.protocol.BATTLE_TYPE[message.battleType] : message.battleType;
            if (message.IsLimit != null && message.hasOwnProperty("IsLimit"))
                object.IsLimit = message.IsLimit;
            if (message.battleServerId != null && message.hasOwnProperty("battleServerId"))
                object.battleServerId = message.battleServerId;
            if (message.wsPort != null && message.hasOwnProperty("wsPort"))
                object.wsPort = message.wsPort;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = options.enums === String ? $root.protocol.TEAM_TYPE[message.teamType] : message.teamType;
            return object;
        };

        /**
         * Converts this MatchBattleInfoResponse to JSON.
         * @function toJSON
         * @memberof protocol.MatchBattleInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchBattleInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchBattleInfoResponse;
    })();

    /**
     * BATTLE_TYPE enum.
     * @name protocol.BATTLE_TYPE
     * @enum {string}
     * @property {number} ALL=0 ALL value
     * @property {number} CASUAL=1 CASUAL value
     * @property {number} JUNIOR=2 JUNIOR value
     * @property {number} SENIOR=3 SENIOR value
     */
    protocol.BATTLE_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ALL"] = 0;
        values[valuesById[1] = "CASUAL"] = 1;
        values[valuesById[2] = "JUNIOR"] = 2;
        values[valuesById[3] = "SENIOR"] = 3;
        return values;
    })();

    /**
     * ITEM_TYPE enum.
     * @name protocol.ITEM_TYPE
     * @enum {string}
     * @property {number} NONE=0 NONE value
     * @property {number} DIAM=1 DIAM value
     * @property {number} GOLD=2 GOLD value
     * @property {number} POWER=3 POWER value
     * @property {number} TOOL=4 TOOL value
     * @property {number} HERO=5 HERO value
     * @property {number} MAX_RANK_SCORE=10 MAX_RANK_SCORE value
     */
    protocol.ITEM_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "DIAM"] = 1;
        values[valuesById[2] = "GOLD"] = 2;
        values[valuesById[3] = "POWER"] = 3;
        values[valuesById[4] = "TOOL"] = 4;
        values[valuesById[5] = "HERO"] = 5;
        values[valuesById[10] = "MAX_RANK_SCORE"] = 10;
        return values;
    })();

    protocol.TeamCreateRequest = (function() {

        /**
         * Properties of a TeamCreateRequest.
         * @memberof protocol
         * @interface ITeamCreateRequest
         * @property {protocol.BATTLE_TYPE|null} [battleType] TeamCreateRequest battleType
         * @property {protocol.TEAM_TYPE|null} [teamType] TeamCreateRequest teamType
         * @property {string|null} [clientVersion] TeamCreateRequest clientVersion
         */

        /**
         * Constructs a new TeamCreateRequest.
         * @memberof protocol
         * @classdesc Represents a TeamCreateRequest.
         * @implements ITeamCreateRequest
         * @constructor
         * @param {protocol.ITeamCreateRequest=} [properties] Properties to set
         */
        function TeamCreateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamCreateRequest battleType.
         * @member {protocol.BATTLE_TYPE} battleType
         * @memberof protocol.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.battleType = 0;

        /**
         * TeamCreateRequest teamType.
         * @member {protocol.TEAM_TYPE} teamType
         * @memberof protocol.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.teamType = 0;

        /**
         * TeamCreateRequest clientVersion.
         * @member {string} clientVersion
         * @memberof protocol.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.clientVersion = "";

        /**
         * Creates a new TeamCreateRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {protocol.ITeamCreateRequest=} [properties] Properties to set
         * @returns {protocol.TeamCreateRequest} TeamCreateRequest instance
         */
        TeamCreateRequest.create = function create(properties) {
            return new TeamCreateRequest(properties);
        };

        /**
         * Encodes the specified TeamCreateRequest message. Does not implicitly {@link protocol.TeamCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {protocol.ITeamCreateRequest} message TeamCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.battleType);
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.teamType);
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.clientVersion);
            return writer;
        };

        /**
         * Encodes the specified TeamCreateRequest message, length delimited. Does not implicitly {@link protocol.TeamCreateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {protocol.ITeamCreateRequest} message TeamCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamCreateRequest} TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamCreateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleType = reader.int32();
                    break;
                case 2:
                    message.teamType = reader.int32();
                    break;
                case 3:
                    message.clientVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamCreateRequest} TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamCreateRequest message.
         * @function verify
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamCreateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                switch (message.battleType) {
                default:
                    return "battleType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                switch (message.teamType) {
                default:
                    return "teamType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                if (!$util.isString(message.clientVersion))
                    return "clientVersion: string expected";
            return null;
        };

        /**
         * Creates a TeamCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamCreateRequest} TeamCreateRequest
         */
        TeamCreateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamCreateRequest)
                return object;
            var message = new $root.protocol.TeamCreateRequest();
            switch (object.battleType) {
            case "ALL":
            case 0:
                message.battleType = 0;
                break;
            case "CASUAL":
            case 1:
                message.battleType = 1;
                break;
            case "JUNIOR":
            case 2:
                message.battleType = 2;
                break;
            case "SENIOR":
            case 3:
                message.battleType = 3;
                break;
            }
            switch (object.teamType) {
            case "NORMAL__":
            case 0:
                message.teamType = 0;
                break;
            case "DIY":
            case 1:
                message.teamType = 1;
                break;
            }
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            return message;
        };

        /**
         * Creates a plain object from a TeamCreateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamCreateRequest
         * @static
         * @param {protocol.TeamCreateRequest} message TeamCreateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamCreateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.battleType = options.enums === String ? "ALL" : 0;
                object.teamType = options.enums === String ? "NORMAL__" : 0;
                object.clientVersion = "";
            }
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                object.battleType = options.enums === String ? $root.protocol.BATTLE_TYPE[message.battleType] : message.battleType;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = options.enums === String ? $root.protocol.TEAM_TYPE[message.teamType] : message.teamType;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            return object;
        };

        /**
         * Converts this TeamCreateRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamCreateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamCreateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamCreateRequest;
    })();

    protocol.TeamCreateResponse = (function() {

        /**
         * Properties of a TeamCreateResponse.
         * @memberof protocol
         * @interface ITeamCreateResponse
         * @property {number|Long|null} [teamId] TeamCreateResponse teamId
         */

        /**
         * Constructs a new TeamCreateResponse.
         * @memberof protocol
         * @classdesc Represents a TeamCreateResponse.
         * @implements ITeamCreateResponse
         * @constructor
         * @param {protocol.ITeamCreateResponse=} [properties] Properties to set
         */
        function TeamCreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamCreateResponse teamId.
         * @member {number|Long} teamId
         * @memberof protocol.TeamCreateResponse
         * @instance
         */
        TeamCreateResponse.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TeamCreateResponse instance using the specified properties.
         * @function create
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {protocol.ITeamCreateResponse=} [properties] Properties to set
         * @returns {protocol.TeamCreateResponse} TeamCreateResponse instance
         */
        TeamCreateResponse.create = function create(properties) {
            return new TeamCreateResponse(properties);
        };

        /**
         * Encodes the specified TeamCreateResponse message. Does not implicitly {@link protocol.TeamCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {protocol.ITeamCreateResponse} message TeamCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
            return writer;
        };

        /**
         * Encodes the specified TeamCreateResponse message, length delimited. Does not implicitly {@link protocol.TeamCreateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {protocol.ITeamCreateResponse} message TeamCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamCreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamCreateResponse} TeamCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamCreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamCreateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamCreateResponse} TeamCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamCreateResponse message.
         * @function verify
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamCreateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                    return "teamId: integer|Long expected";
            return null;
        };

        /**
         * Creates a TeamCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamCreateResponse} TeamCreateResponse
         */
        TeamCreateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamCreateResponse)
                return object;
            var message = new $root.protocol.TeamCreateResponse();
            if (object.teamId != null)
                if ($util.Long)
                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                else if (typeof object.teamId === "string")
                    message.teamId = parseInt(object.teamId, 10);
                else if (typeof object.teamId === "number")
                    message.teamId = object.teamId;
                else if (typeof object.teamId === "object")
                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TeamCreateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamCreateResponse
         * @static
         * @param {protocol.TeamCreateResponse} message TeamCreateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamCreateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.teamId = options.longs === String ? "0" : 0;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (typeof message.teamId === "number")
                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                else
                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
            return object;
        };

        /**
         * Converts this TeamCreateResponse to JSON.
         * @function toJSON
         * @memberof protocol.TeamCreateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamCreateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamCreateResponse;
    })();

    /**
     * RANK_TYPE enum.
     * @name protocol.RANK_TYPE
     * @enum {string}
     * @property {number} NONE_=0 NONE_ value
     * @property {number} MAX_RANK=1 MAX_RANK value
     */
    protocol.RANK_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE_"] = 0;
        values[valuesById[1] = "MAX_RANK"] = 1;
        return values;
    })();

    protocol.TeamJoinRequest = (function() {

        /**
         * Properties of a TeamJoinRequest.
         * @memberof protocol
         * @interface ITeamJoinRequest
         * @property {number|Long|null} [teamId] TeamJoinRequest teamId
         * @property {string|null} [clientVersion] TeamJoinRequest clientVersion
         */

        /**
         * Constructs a new TeamJoinRequest.
         * @memberof protocol
         * @classdesc Represents a TeamJoinRequest.
         * @implements ITeamJoinRequest
         * @constructor
         * @param {protocol.ITeamJoinRequest=} [properties] Properties to set
         */
        function TeamJoinRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamJoinRequest teamId.
         * @member {number|Long} teamId
         * @memberof protocol.TeamJoinRequest
         * @instance
         */
        TeamJoinRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TeamJoinRequest clientVersion.
         * @member {string} clientVersion
         * @memberof protocol.TeamJoinRequest
         * @instance
         */
        TeamJoinRequest.prototype.clientVersion = "";

        /**
         * Creates a new TeamJoinRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {protocol.ITeamJoinRequest=} [properties] Properties to set
         * @returns {protocol.TeamJoinRequest} TeamJoinRequest instance
         */
        TeamJoinRequest.create = function create(properties) {
            return new TeamJoinRequest(properties);
        };

        /**
         * Encodes the specified TeamJoinRequest message. Does not implicitly {@link protocol.TeamJoinRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {protocol.ITeamJoinRequest} message TeamJoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamJoinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.clientVersion);
            return writer;
        };

        /**
         * Encodes the specified TeamJoinRequest message, length delimited. Does not implicitly {@link protocol.TeamJoinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {protocol.ITeamJoinRequest} message TeamJoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamJoinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamJoinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamJoinRequest} TeamJoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamJoinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamJoinRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.int64();
                    break;
                case 3:
                    message.clientVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamJoinRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamJoinRequest} TeamJoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamJoinRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamJoinRequest message.
         * @function verify
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamJoinRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                    return "teamId: integer|Long expected";
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                if (!$util.isString(message.clientVersion))
                    return "clientVersion: string expected";
            return null;
        };

        /**
         * Creates a TeamJoinRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamJoinRequest} TeamJoinRequest
         */
        TeamJoinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamJoinRequest)
                return object;
            var message = new $root.protocol.TeamJoinRequest();
            if (object.teamId != null)
                if ($util.Long)
                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                else if (typeof object.teamId === "string")
                    message.teamId = parseInt(object.teamId, 10);
                else if (typeof object.teamId === "number")
                    message.teamId = object.teamId;
                else if (typeof object.teamId === "object")
                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            return message;
        };

        /**
         * Creates a plain object from a TeamJoinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamJoinRequest
         * @static
         * @param {protocol.TeamJoinRequest} message TeamJoinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamJoinRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.teamId = options.longs === String ? "0" : 0;
                object.clientVersion = "";
            }
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (typeof message.teamId === "number")
                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                else
                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            return object;
        };

        /**
         * Converts this TeamJoinRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamJoinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamJoinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamJoinRequest;
    })();

    protocol.TeamApplyRequest = (function() {

        /**
         * Properties of a TeamApplyRequest.
         * @memberof protocol
         * @interface ITeamApplyRequest
         * @property {number|null} [byApplyUid] TeamApplyRequest byApplyUid
         * @property {number|Long|null} [teamId] TeamApplyRequest teamId
         * @property {protocol.BATTLE_TYPE|null} [battleType] TeamApplyRequest battleType
         * @property {protocol.TEAM_TYPE|null} [teamType] TeamApplyRequest teamType
         */

        /**
         * Constructs a new TeamApplyRequest.
         * @memberof protocol
         * @classdesc Represents a TeamApplyRequest.
         * @implements ITeamApplyRequest
         * @constructor
         * @param {protocol.ITeamApplyRequest=} [properties] Properties to set
         */
        function TeamApplyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamApplyRequest byApplyUid.
         * @member {number} byApplyUid
         * @memberof protocol.TeamApplyRequest
         * @instance
         */
        TeamApplyRequest.prototype.byApplyUid = 0;

        /**
         * TeamApplyRequest teamId.
         * @member {number|Long} teamId
         * @memberof protocol.TeamApplyRequest
         * @instance
         */
        TeamApplyRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TeamApplyRequest battleType.
         * @member {protocol.BATTLE_TYPE} battleType
         * @memberof protocol.TeamApplyRequest
         * @instance
         */
        TeamApplyRequest.prototype.battleType = 0;

        /**
         * TeamApplyRequest teamType.
         * @member {protocol.TEAM_TYPE} teamType
         * @memberof protocol.TeamApplyRequest
         * @instance
         */
        TeamApplyRequest.prototype.teamType = 0;

        /**
         * Creates a new TeamApplyRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {protocol.ITeamApplyRequest=} [properties] Properties to set
         * @returns {protocol.TeamApplyRequest} TeamApplyRequest instance
         */
        TeamApplyRequest.create = function create(properties) {
            return new TeamApplyRequest(properties);
        };

        /**
         * Encodes the specified TeamApplyRequest message. Does not implicitly {@link protocol.TeamApplyRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {protocol.ITeamApplyRequest} message TeamApplyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamApplyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.byApplyUid != null && message.hasOwnProperty("byApplyUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.byApplyUid);
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.battleType);
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.teamType);
            return writer;
        };

        /**
         * Encodes the specified TeamApplyRequest message, length delimited. Does not implicitly {@link protocol.TeamApplyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {protocol.ITeamApplyRequest} message TeamApplyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamApplyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamApplyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamApplyRequest} TeamApplyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamApplyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamApplyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.byApplyUid = reader.int32();
                    break;
                case 2:
                    message.teamId = reader.int64();
                    break;
                case 3:
                    message.battleType = reader.int32();
                    break;
                case 4:
                    message.teamType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamApplyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamApplyRequest} TeamApplyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamApplyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamApplyRequest message.
         * @function verify
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamApplyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.byApplyUid != null && message.hasOwnProperty("byApplyUid"))
                if (!$util.isInteger(message.byApplyUid))
                    return "byApplyUid: integer expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                    return "teamId: integer|Long expected";
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                switch (message.battleType) {
                default:
                    return "battleType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                switch (message.teamType) {
                default:
                    return "teamType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a TeamApplyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamApplyRequest} TeamApplyRequest
         */
        TeamApplyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamApplyRequest)
                return object;
            var message = new $root.protocol.TeamApplyRequest();
            if (object.byApplyUid != null)
                message.byApplyUid = object.byApplyUid | 0;
            if (object.teamId != null)
                if ($util.Long)
                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                else if (typeof object.teamId === "string")
                    message.teamId = parseInt(object.teamId, 10);
                else if (typeof object.teamId === "number")
                    message.teamId = object.teamId;
                else if (typeof object.teamId === "object")
                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
            switch (object.battleType) {
            case "ALL":
            case 0:
                message.battleType = 0;
                break;
            case "CASUAL":
            case 1:
                message.battleType = 1;
                break;
            case "JUNIOR":
            case 2:
                message.battleType = 2;
                break;
            case "SENIOR":
            case 3:
                message.battleType = 3;
                break;
            }
            switch (object.teamType) {
            case "NORMAL__":
            case 0:
                message.teamType = 0;
                break;
            case "DIY":
            case 1:
                message.teamType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamApplyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamApplyRequest
         * @static
         * @param {protocol.TeamApplyRequest} message TeamApplyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamApplyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.byApplyUid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.teamId = options.longs === String ? "0" : 0;
                object.battleType = options.enums === String ? "ALL" : 0;
                object.teamType = options.enums === String ? "NORMAL__" : 0;
            }
            if (message.byApplyUid != null && message.hasOwnProperty("byApplyUid"))
                object.byApplyUid = message.byApplyUid;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (typeof message.teamId === "number")
                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                else
                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                object.battleType = options.enums === String ? $root.protocol.BATTLE_TYPE[message.battleType] : message.battleType;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = options.enums === String ? $root.protocol.TEAM_TYPE[message.teamType] : message.teamType;
            return object;
        };

        /**
         * Converts this TeamApplyRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamApplyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamApplyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamApplyRequest;
    })();

    protocol.TeamByApplyResponse = (function() {

        /**
         * Properties of a TeamByApplyResponse.
         * @memberof protocol
         * @interface ITeamByApplyResponse
         * @property {number|Long|null} [teamId] TeamByApplyResponse teamId
         * @property {protocol.BATTLE_TYPE|null} [battleType] TeamByApplyResponse battleType
         * @property {string|null} [name] TeamByApplyResponse name
         * @property {string|null} [headImage] TeamByApplyResponse headImage
         * @property {number|null} [maxRankId] TeamByApplyResponse maxRankId
         * @property {number|null} [uid] TeamByApplyResponse uid
         * @property {number|null} [headBoxId] TeamByApplyResponse headBoxId
         * @property {protocol.TEAM_TYPE|null} [teamType] TeamByApplyResponse teamType
         */

        /**
         * Constructs a new TeamByApplyResponse.
         * @memberof protocol
         * @classdesc Represents a TeamByApplyResponse.
         * @implements ITeamByApplyResponse
         * @constructor
         * @param {protocol.ITeamByApplyResponse=} [properties] Properties to set
         */
        function TeamByApplyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamByApplyResponse teamId.
         * @member {number|Long} teamId
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TeamByApplyResponse battleType.
         * @member {protocol.BATTLE_TYPE} battleType
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.battleType = 0;

        /**
         * TeamByApplyResponse name.
         * @member {string} name
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.name = "";

        /**
         * TeamByApplyResponse headImage.
         * @member {string} headImage
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.headImage = "";

        /**
         * TeamByApplyResponse maxRankId.
         * @member {number} maxRankId
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.maxRankId = 0;

        /**
         * TeamByApplyResponse uid.
         * @member {number} uid
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.uid = 0;

        /**
         * TeamByApplyResponse headBoxId.
         * @member {number} headBoxId
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.headBoxId = 0;

        /**
         * TeamByApplyResponse teamType.
         * @member {protocol.TEAM_TYPE} teamType
         * @memberof protocol.TeamByApplyResponse
         * @instance
         */
        TeamByApplyResponse.prototype.teamType = 0;

        /**
         * Creates a new TeamByApplyResponse instance using the specified properties.
         * @function create
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {protocol.ITeamByApplyResponse=} [properties] Properties to set
         * @returns {protocol.TeamByApplyResponse} TeamByApplyResponse instance
         */
        TeamByApplyResponse.create = function create(properties) {
            return new TeamByApplyResponse(properties);
        };

        /**
         * Encodes the specified TeamByApplyResponse message. Does not implicitly {@link protocol.TeamByApplyResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {protocol.ITeamByApplyResponse} message TeamByApplyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamByApplyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battleType);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headImage);
            if (message.maxRankId != null && message.hasOwnProperty("maxRankId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxRankId);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.uid);
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.headBoxId);
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.teamType);
            return writer;
        };

        /**
         * Encodes the specified TeamByApplyResponse message, length delimited. Does not implicitly {@link protocol.TeamByApplyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {protocol.ITeamByApplyResponse} message TeamByApplyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamByApplyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamByApplyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamByApplyResponse} TeamByApplyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamByApplyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamByApplyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.int64();
                    break;
                case 2:
                    message.battleType = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.headImage = reader.string();
                    break;
                case 6:
                    message.maxRankId = reader.int32();
                    break;
                case 7:
                    message.uid = reader.int32();
                    break;
                case 8:
                    message.headBoxId = reader.int32();
                    break;
                case 10:
                    message.teamType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamByApplyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamByApplyResponse} TeamByApplyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamByApplyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamByApplyResponse message.
         * @function verify
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamByApplyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                    return "teamId: integer|Long expected";
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                switch (message.battleType) {
                default:
                    return "battleType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                if (!$util.isString(message.headImage))
                    return "headImage: string expected";
            if (message.maxRankId != null && message.hasOwnProperty("maxRankId"))
                if (!$util.isInteger(message.maxRankId))
                    return "maxRankId: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                if (!$util.isInteger(message.headBoxId))
                    return "headBoxId: integer expected";
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                switch (message.teamType) {
                default:
                    return "teamType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a TeamByApplyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamByApplyResponse} TeamByApplyResponse
         */
        TeamByApplyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamByApplyResponse)
                return object;
            var message = new $root.protocol.TeamByApplyResponse();
            if (object.teamId != null)
                if ($util.Long)
                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                else if (typeof object.teamId === "string")
                    message.teamId = parseInt(object.teamId, 10);
                else if (typeof object.teamId === "number")
                    message.teamId = object.teamId;
                else if (typeof object.teamId === "object")
                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
            switch (object.battleType) {
            case "ALL":
            case 0:
                message.battleType = 0;
                break;
            case "CASUAL":
            case 1:
                message.battleType = 1;
                break;
            case "JUNIOR":
            case 2:
                message.battleType = 2;
                break;
            case "SENIOR":
            case 3:
                message.battleType = 3;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.headImage != null)
                message.headImage = String(object.headImage);
            if (object.maxRankId != null)
                message.maxRankId = object.maxRankId | 0;
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.headBoxId != null)
                message.headBoxId = object.headBoxId | 0;
            switch (object.teamType) {
            case "NORMAL__":
            case 0:
                message.teamType = 0;
                break;
            case "DIY":
            case 1:
                message.teamType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamByApplyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamByApplyResponse
         * @static
         * @param {protocol.TeamByApplyResponse} message TeamByApplyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamByApplyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.teamId = options.longs === String ? "0" : 0;
                object.battleType = options.enums === String ? "ALL" : 0;
                object.name = "";
                object.headImage = "";
                object.maxRankId = 0;
                object.uid = 0;
                object.headBoxId = 0;
                object.teamType = options.enums === String ? "NORMAL__" : 0;
            }
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (typeof message.teamId === "number")
                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                else
                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                object.battleType = options.enums === String ? $root.protocol.BATTLE_TYPE[message.battleType] : message.battleType;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                object.headImage = message.headImage;
            if (message.maxRankId != null && message.hasOwnProperty("maxRankId"))
                object.maxRankId = message.maxRankId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.headBoxId != null && message.hasOwnProperty("headBoxId"))
                object.headBoxId = message.headBoxId;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = options.enums === String ? $root.protocol.TEAM_TYPE[message.teamType] : message.teamType;
            return object;
        };

        /**
         * Converts this TeamByApplyResponse to JSON.
         * @function toJSON
         * @memberof protocol.TeamByApplyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamByApplyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamByApplyResponse;
    })();

    protocol.TeamRefuseRequest = (function() {

        /**
         * Properties of a TeamRefuseRequest.
         * @memberof protocol
         * @interface ITeamRefuseRequest
         * @property {number|null} [applyUid] TeamRefuseRequest applyUid
         * @property {number|Long|null} [teamId] TeamRefuseRequest teamId
         */

        /**
         * Constructs a new TeamRefuseRequest.
         * @memberof protocol
         * @classdesc Represents a TeamRefuseRequest.
         * @implements ITeamRefuseRequest
         * @constructor
         * @param {protocol.ITeamRefuseRequest=} [properties] Properties to set
         */
        function TeamRefuseRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamRefuseRequest applyUid.
         * @member {number} applyUid
         * @memberof protocol.TeamRefuseRequest
         * @instance
         */
        TeamRefuseRequest.prototype.applyUid = 0;

        /**
         * TeamRefuseRequest teamId.
         * @member {number|Long} teamId
         * @memberof protocol.TeamRefuseRequest
         * @instance
         */
        TeamRefuseRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TeamRefuseRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {protocol.ITeamRefuseRequest=} [properties] Properties to set
         * @returns {protocol.TeamRefuseRequest} TeamRefuseRequest instance
         */
        TeamRefuseRequest.create = function create(properties) {
            return new TeamRefuseRequest(properties);
        };

        /**
         * Encodes the specified TeamRefuseRequest message. Does not implicitly {@link protocol.TeamRefuseRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {protocol.ITeamRefuseRequest} message TeamRefuseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamRefuseRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.applyUid != null && message.hasOwnProperty("applyUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.applyUid);
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
            return writer;
        };

        /**
         * Encodes the specified TeamRefuseRequest message, length delimited. Does not implicitly {@link protocol.TeamRefuseRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {protocol.ITeamRefuseRequest} message TeamRefuseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamRefuseRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamRefuseRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamRefuseRequest} TeamRefuseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamRefuseRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamRefuseRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.applyUid = reader.int32();
                    break;
                case 2:
                    message.teamId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamRefuseRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamRefuseRequest} TeamRefuseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamRefuseRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamRefuseRequest message.
         * @function verify
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamRefuseRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.applyUid != null && message.hasOwnProperty("applyUid"))
                if (!$util.isInteger(message.applyUid))
                    return "applyUid: integer expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                    return "teamId: integer|Long expected";
            return null;
        };

        /**
         * Creates a TeamRefuseRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamRefuseRequest} TeamRefuseRequest
         */
        TeamRefuseRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamRefuseRequest)
                return object;
            var message = new $root.protocol.TeamRefuseRequest();
            if (object.applyUid != null)
                message.applyUid = object.applyUid | 0;
            if (object.teamId != null)
                if ($util.Long)
                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                else if (typeof object.teamId === "string")
                    message.teamId = parseInt(object.teamId, 10);
                else if (typeof object.teamId === "number")
                    message.teamId = object.teamId;
                else if (typeof object.teamId === "object")
                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TeamRefuseRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamRefuseRequest
         * @static
         * @param {protocol.TeamRefuseRequest} message TeamRefuseRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamRefuseRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.applyUid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.teamId = options.longs === String ? "0" : 0;
            }
            if (message.applyUid != null && message.hasOwnProperty("applyUid"))
                object.applyUid = message.applyUid;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (typeof message.teamId === "number")
                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                else
                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
            return object;
        };

        /**
         * Converts this TeamRefuseRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamRefuseRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamRefuseRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamRefuseRequest;
    })();

    protocol.TeamByRefuseResponse = (function() {

        /**
         * Properties of a TeamByRefuseResponse.
         * @memberof protocol
         * @interface ITeamByRefuseResponse
         * @property {number|null} [refuseUid] TeamByRefuseResponse refuseUid
         * @property {string|null} [refuseName] TeamByRefuseResponse refuseName
         */

        /**
         * Constructs a new TeamByRefuseResponse.
         * @memberof protocol
         * @classdesc Represents a TeamByRefuseResponse.
         * @implements ITeamByRefuseResponse
         * @constructor
         * @param {protocol.ITeamByRefuseResponse=} [properties] Properties to set
         */
        function TeamByRefuseResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamByRefuseResponse refuseUid.
         * @member {number} refuseUid
         * @memberof protocol.TeamByRefuseResponse
         * @instance
         */
        TeamByRefuseResponse.prototype.refuseUid = 0;

        /**
         * TeamByRefuseResponse refuseName.
         * @member {string} refuseName
         * @memberof protocol.TeamByRefuseResponse
         * @instance
         */
        TeamByRefuseResponse.prototype.refuseName = "";

        /**
         * Creates a new TeamByRefuseResponse instance using the specified properties.
         * @function create
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {protocol.ITeamByRefuseResponse=} [properties] Properties to set
         * @returns {protocol.TeamByRefuseResponse} TeamByRefuseResponse instance
         */
        TeamByRefuseResponse.create = function create(properties) {
            return new TeamByRefuseResponse(properties);
        };

        /**
         * Encodes the specified TeamByRefuseResponse message. Does not implicitly {@link protocol.TeamByRefuseResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {protocol.ITeamByRefuseResponse} message TeamByRefuseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamByRefuseResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refuseUid != null && message.hasOwnProperty("refuseUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.refuseUid);
            if (message.refuseName != null && message.hasOwnProperty("refuseName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refuseName);
            return writer;
        };

        /**
         * Encodes the specified TeamByRefuseResponse message, length delimited. Does not implicitly {@link protocol.TeamByRefuseResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {protocol.ITeamByRefuseResponse} message TeamByRefuseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamByRefuseResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamByRefuseResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamByRefuseResponse} TeamByRefuseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamByRefuseResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamByRefuseResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.refuseUid = reader.int32();
                    break;
                case 2:
                    message.refuseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamByRefuseResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamByRefuseResponse} TeamByRefuseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamByRefuseResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamByRefuseResponse message.
         * @function verify
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamByRefuseResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refuseUid != null && message.hasOwnProperty("refuseUid"))
                if (!$util.isInteger(message.refuseUid))
                    return "refuseUid: integer expected";
            if (message.refuseName != null && message.hasOwnProperty("refuseName"))
                if (!$util.isString(message.refuseName))
                    return "refuseName: string expected";
            return null;
        };

        /**
         * Creates a TeamByRefuseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamByRefuseResponse} TeamByRefuseResponse
         */
        TeamByRefuseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamByRefuseResponse)
                return object;
            var message = new $root.protocol.TeamByRefuseResponse();
            if (object.refuseUid != null)
                message.refuseUid = object.refuseUid | 0;
            if (object.refuseName != null)
                message.refuseName = String(object.refuseName);
            return message;
        };

        /**
         * Creates a plain object from a TeamByRefuseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamByRefuseResponse
         * @static
         * @param {protocol.TeamByRefuseResponse} message TeamByRefuseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamByRefuseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.refuseUid = 0;
                object.refuseName = "";
            }
            if (message.refuseUid != null && message.hasOwnProperty("refuseUid"))
                object.refuseUid = message.refuseUid;
            if (message.refuseName != null && message.hasOwnProperty("refuseName"))
                object.refuseName = message.refuseName;
            return object;
        };

        /**
         * Converts this TeamByRefuseResponse to JSON.
         * @function toJSON
         * @memberof protocol.TeamByRefuseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamByRefuseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamByRefuseResponse;
    })();

    /**
     * ONLINE_STATUS enum.
     * @name protocol.ONLINE_STATUS
     * @enum {string}
     * @property {number} OFFLINE=0 OFFLINE value
     * @property {number} ONLINE=1 ONLINE value
     * @property {number} TEAMING=2 TEAMING value
     * @property {number} BATTLING=3 BATTLING value
     */
    protocol.ONLINE_STATUS = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OFFLINE"] = 0;
        values[valuesById[1] = "ONLINE"] = 1;
        values[valuesById[2] = "TEAMING"] = 2;
        values[valuesById[3] = "BATTLING"] = 3;
        return values;
    })();

    protocol.BattleFinishRequest = (function() {

        /**
         * Properties of a BattleFinishRequest.
         * @memberof protocol
         * @interface IBattleFinishRequest
         * @property {number|Long|null} [battleId] BattleFinishRequest battleId
         */

        /**
         * Constructs a new BattleFinishRequest.
         * @memberof protocol
         * @classdesc Represents a BattleFinishRequest.
         * @implements IBattleFinishRequest
         * @constructor
         * @param {protocol.IBattleFinishRequest=} [properties] Properties to set
         */
        function BattleFinishRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleFinishRequest battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleFinishRequest
         * @instance
         */
        BattleFinishRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BattleFinishRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {protocol.IBattleFinishRequest=} [properties] Properties to set
         * @returns {protocol.BattleFinishRequest} BattleFinishRequest instance
         */
        BattleFinishRequest.create = function create(properties) {
            return new BattleFinishRequest(properties);
        };

        /**
         * Encodes the specified BattleFinishRequest message. Does not implicitly {@link protocol.BattleFinishRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {protocol.IBattleFinishRequest} message BattleFinishRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFinishRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            return writer;
        };

        /**
         * Encodes the specified BattleFinishRequest message, length delimited. Does not implicitly {@link protocol.BattleFinishRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {protocol.IBattleFinishRequest} message BattleFinishRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFinishRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleFinishRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleFinishRequest} BattleFinishRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFinishRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleFinishRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleFinishRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleFinishRequest} BattleFinishRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFinishRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleFinishRequest message.
         * @function verify
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleFinishRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BattleFinishRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleFinishRequest} BattleFinishRequest
         */
        BattleFinishRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleFinishRequest)
                return object;
            var message = new $root.protocol.BattleFinishRequest();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BattleFinishRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleFinishRequest
         * @static
         * @param {protocol.BattleFinishRequest} message BattleFinishRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleFinishRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            return object;
        };

        /**
         * Converts this BattleFinishRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleFinishRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleFinishRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleFinishRequest;
    })();

    /**
     * NOTICE_KEY enum.
     * @name protocol.NOTICE_KEY
     * @enum {string}
     * @property {number} MAIL=0 MAIL value
     */
    protocol.NOTICE_KEY = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAIL"] = 0;
        return values;
    })();

    protocol.CommonNotice = (function() {

        /**
         * Properties of a CommonNotice.
         * @memberof protocol
         * @interface ICommonNotice
         * @property {protocol.NOTICE_KEY|null} [noticeKey] CommonNotice noticeKey
         * @property {boolean|null} [state] CommonNotice state
         */

        /**
         * Constructs a new CommonNotice.
         * @memberof protocol
         * @classdesc Represents a CommonNotice.
         * @implements ICommonNotice
         * @constructor
         * @param {protocol.ICommonNotice=} [properties] Properties to set
         */
        function CommonNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonNotice noticeKey.
         * @member {protocol.NOTICE_KEY} noticeKey
         * @memberof protocol.CommonNotice
         * @instance
         */
        CommonNotice.prototype.noticeKey = 0;

        /**
         * CommonNotice state.
         * @member {boolean} state
         * @memberof protocol.CommonNotice
         * @instance
         */
        CommonNotice.prototype.state = false;

        /**
         * Creates a new CommonNotice instance using the specified properties.
         * @function create
         * @memberof protocol.CommonNotice
         * @static
         * @param {protocol.ICommonNotice=} [properties] Properties to set
         * @returns {protocol.CommonNotice} CommonNotice instance
         */
        CommonNotice.create = function create(properties) {
            return new CommonNotice(properties);
        };

        /**
         * Encodes the specified CommonNotice message. Does not implicitly {@link protocol.CommonNotice.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonNotice
         * @static
         * @param {protocol.ICommonNotice} message CommonNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.noticeKey != null && message.hasOwnProperty("noticeKey"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.noticeKey);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.state);
            return writer;
        };

        /**
         * Encodes the specified CommonNotice message, length delimited. Does not implicitly {@link protocol.CommonNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonNotice
         * @static
         * @param {protocol.ICommonNotice} message CommonNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonNotice message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonNotice} CommonNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.noticeKey = reader.int32();
                    break;
                case 2:
                    message.state = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonNotice} CommonNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonNotice message.
         * @function verify
         * @memberof protocol.CommonNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.noticeKey != null && message.hasOwnProperty("noticeKey"))
                switch (message.noticeKey) {
                default:
                    return "noticeKey: enum value expected";
                case 0:
                    break;
                }
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state !== "boolean")
                    return "state: boolean expected";
            return null;
        };

        /**
         * Creates a CommonNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonNotice} CommonNotice
         */
        CommonNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonNotice)
                return object;
            var message = new $root.protocol.CommonNotice();
            switch (object.noticeKey) {
            case "MAIL":
            case 0:
                message.noticeKey = 0;
                break;
            }
            if (object.state != null)
                message.state = Boolean(object.state);
            return message;
        };

        /**
         * Creates a plain object from a CommonNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonNotice
         * @static
         * @param {protocol.CommonNotice} message CommonNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.noticeKey = options.enums === String ? "MAIL" : 0;
                object.state = false;
            }
            if (message.noticeKey != null && message.hasOwnProperty("noticeKey"))
                object.noticeKey = options.enums === String ? $root.protocol.NOTICE_KEY[message.noticeKey] : message.noticeKey;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this CommonNotice to JSON.
         * @function toJSON
         * @memberof protocol.CommonNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonNotice;
    })();

    protocol.NoticeResponse = (function() {

        /**
         * Properties of a NoticeResponse.
         * @memberof protocol
         * @interface INoticeResponse
         * @property {Array.<protocol.ICommonNotice>|null} [commonNoticeList] NoticeResponse commonNoticeList
         */

        /**
         * Constructs a new NoticeResponse.
         * @memberof protocol
         * @classdesc Represents a NoticeResponse.
         * @implements INoticeResponse
         * @constructor
         * @param {protocol.INoticeResponse=} [properties] Properties to set
         */
        function NoticeResponse(properties) {
            this.commonNoticeList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoticeResponse commonNoticeList.
         * @member {Array.<protocol.ICommonNotice>} commonNoticeList
         * @memberof protocol.NoticeResponse
         * @instance
         */
        NoticeResponse.prototype.commonNoticeList = $util.emptyArray;

        /**
         * Creates a new NoticeResponse instance using the specified properties.
         * @function create
         * @memberof protocol.NoticeResponse
         * @static
         * @param {protocol.INoticeResponse=} [properties] Properties to set
         * @returns {protocol.NoticeResponse} NoticeResponse instance
         */
        NoticeResponse.create = function create(properties) {
            return new NoticeResponse(properties);
        };

        /**
         * Encodes the specified NoticeResponse message. Does not implicitly {@link protocol.NoticeResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.NoticeResponse
         * @static
         * @param {protocol.INoticeResponse} message NoticeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commonNoticeList != null && message.commonNoticeList.length)
                for (var i = 0; i < message.commonNoticeList.length; ++i)
                    $root.protocol.CommonNotice.encode(message.commonNoticeList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NoticeResponse message, length delimited. Does not implicitly {@link protocol.NoticeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NoticeResponse
         * @static
         * @param {protocol.INoticeResponse} message NoticeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoticeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NoticeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NoticeResponse} NoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NoticeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.commonNoticeList && message.commonNoticeList.length))
                        message.commonNoticeList = [];
                    message.commonNoticeList.push($root.protocol.CommonNotice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoticeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NoticeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NoticeResponse} NoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoticeResponse message.
         * @function verify
         * @memberof protocol.NoticeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoticeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commonNoticeList != null && message.hasOwnProperty("commonNoticeList")) {
                if (!Array.isArray(message.commonNoticeList))
                    return "commonNoticeList: array expected";
                for (var i = 0; i < message.commonNoticeList.length; ++i) {
                    var error = $root.protocol.CommonNotice.verify(message.commonNoticeList[i]);
                    if (error)
                        return "commonNoticeList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NoticeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NoticeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NoticeResponse} NoticeResponse
         */
        NoticeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NoticeResponse)
                return object;
            var message = new $root.protocol.NoticeResponse();
            if (object.commonNoticeList) {
                if (!Array.isArray(object.commonNoticeList))
                    throw TypeError(".protocol.NoticeResponse.commonNoticeList: array expected");
                message.commonNoticeList = [];
                for (var i = 0; i < object.commonNoticeList.length; ++i) {
                    if (typeof object.commonNoticeList[i] !== "object")
                        throw TypeError(".protocol.NoticeResponse.commonNoticeList: object expected");
                    message.commonNoticeList[i] = $root.protocol.CommonNotice.fromObject(object.commonNoticeList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NoticeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NoticeResponse
         * @static
         * @param {protocol.NoticeResponse} message NoticeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoticeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commonNoticeList = [];
            if (message.commonNoticeList && message.commonNoticeList.length) {
                object.commonNoticeList = [];
                for (var j = 0; j < message.commonNoticeList.length; ++j)
                    object.commonNoticeList[j] = $root.protocol.CommonNotice.toObject(message.commonNoticeList[j], options);
            }
            return object;
        };

        /**
         * Converts this NoticeResponse to JSON.
         * @function toJSON
         * @memberof protocol.NoticeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoticeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NoticeResponse;
    })();

    protocol.ClientErrorRequest = (function() {

        /**
         * Properties of a ClientErrorRequest.
         * @memberof protocol
         * @interface IClientErrorRequest
         * @property {string|null} [code] ClientErrorRequest code
         */

        /**
         * Constructs a new ClientErrorRequest.
         * @memberof protocol
         * @classdesc Represents a ClientErrorRequest.
         * @implements IClientErrorRequest
         * @constructor
         * @param {protocol.IClientErrorRequest=} [properties] Properties to set
         */
        function ClientErrorRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientErrorRequest code.
         * @member {string} code
         * @memberof protocol.ClientErrorRequest
         * @instance
         */
        ClientErrorRequest.prototype.code = "";

        /**
         * Creates a new ClientErrorRequest instance using the specified properties.
         * @function create
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {protocol.IClientErrorRequest=} [properties] Properties to set
         * @returns {protocol.ClientErrorRequest} ClientErrorRequest instance
         */
        ClientErrorRequest.create = function create(properties) {
            return new ClientErrorRequest(properties);
        };

        /**
         * Encodes the specified ClientErrorRequest message. Does not implicitly {@link protocol.ClientErrorRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {protocol.IClientErrorRequest} message ClientErrorRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientErrorRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified ClientErrorRequest message, length delimited. Does not implicitly {@link protocol.ClientErrorRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {protocol.IClientErrorRequest} message ClientErrorRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientErrorRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientErrorRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ClientErrorRequest} ClientErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientErrorRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ClientErrorRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientErrorRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ClientErrorRequest} ClientErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientErrorRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientErrorRequest message.
         * @function verify
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientErrorRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a ClientErrorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ClientErrorRequest} ClientErrorRequest
         */
        ClientErrorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ClientErrorRequest)
                return object;
            var message = new $root.protocol.ClientErrorRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a ClientErrorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ClientErrorRequest
         * @static
         * @param {protocol.ClientErrorRequest} message ClientErrorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientErrorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this ClientErrorRequest to JSON.
         * @function toJSON
         * @memberof protocol.ClientErrorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientErrorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientErrorRequest;
    })();

    protocol.HeartbeatResponse = (function() {

        /**
         * Properties of a HeartbeatResponse.
         * @memberof protocol
         * @interface IHeartbeatResponse
         * @property {number|Long|null} [now] HeartbeatResponse now
         */

        /**
         * Constructs a new HeartbeatResponse.
         * @memberof protocol
         * @classdesc Represents a HeartbeatResponse.
         * @implements IHeartbeatResponse
         * @constructor
         * @param {protocol.IHeartbeatResponse=} [properties] Properties to set
         */
        function HeartbeatResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatResponse now.
         * @member {number|Long} now
         * @memberof protocol.HeartbeatResponse
         * @instance
         */
        HeartbeatResponse.prototype.now = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartbeatResponse instance using the specified properties.
         * @function create
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {protocol.IHeartbeatResponse=} [properties] Properties to set
         * @returns {protocol.HeartbeatResponse} HeartbeatResponse instance
         */
        HeartbeatResponse.create = function create(properties) {
            return new HeartbeatResponse(properties);
        };

        /**
         * Encodes the specified HeartbeatResponse message. Does not implicitly {@link protocol.HeartbeatResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {protocol.IHeartbeatResponse} message HeartbeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.now != null && message.hasOwnProperty("now"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.now);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link protocol.HeartbeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {protocol.IHeartbeatResponse} message HeartbeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeartbeatResponse} HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeartbeatResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.now = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeartbeatResponse} HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatResponse message.
         * @function verify
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.now != null && message.hasOwnProperty("now"))
                if (!$util.isInteger(message.now) && !(message.now && $util.isInteger(message.now.low) && $util.isInteger(message.now.high)))
                    return "now: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeartbeatResponse} HeartbeatResponse
         */
        HeartbeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeartbeatResponse)
                return object;
            var message = new $root.protocol.HeartbeatResponse();
            if (object.now != null)
                if ($util.Long)
                    (message.now = $util.Long.fromValue(object.now)).unsigned = false;
                else if (typeof object.now === "string")
                    message.now = parseInt(object.now, 10);
                else if (typeof object.now === "number")
                    message.now = object.now;
                else if (typeof object.now === "object")
                    message.now = new $util.LongBits(object.now.low >>> 0, object.now.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeartbeatResponse
         * @static
         * @param {protocol.HeartbeatResponse} message HeartbeatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.now = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.now = options.longs === String ? "0" : 0;
            if (message.now != null && message.hasOwnProperty("now"))
                if (typeof message.now === "number")
                    object.now = options.longs === String ? String(message.now) : message.now;
                else
                    object.now = options.longs === String ? $util.Long.prototype.toString.call(message.now) : options.longs === Number ? new $util.LongBits(message.now.low >>> 0, message.now.high >>> 0).toNumber() : message.now;
            return object;
        };

        /**
         * Converts this HeartbeatResponse to JSON.
         * @function toJSON
         * @memberof protocol.HeartbeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartbeatResponse;
    })();

    protocol.TeamRobotAddRequest = (function() {

        /**
         * Properties of a TeamRobotAddRequest.
         * @memberof protocol
         * @interface ITeamRobotAddRequest
         * @property {number|null} [tId] TeamRobotAddRequest tId
         */

        /**
         * Constructs a new TeamRobotAddRequest.
         * @memberof protocol
         * @classdesc Represents a TeamRobotAddRequest.
         * @implements ITeamRobotAddRequest
         * @constructor
         * @param {protocol.ITeamRobotAddRequest=} [properties] Properties to set
         */
        function TeamRobotAddRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamRobotAddRequest tId.
         * @member {number} tId
         * @memberof protocol.TeamRobotAddRequest
         * @instance
         */
        TeamRobotAddRequest.prototype.tId = 0;

        /**
         * Creates a new TeamRobotAddRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {protocol.ITeamRobotAddRequest=} [properties] Properties to set
         * @returns {protocol.TeamRobotAddRequest} TeamRobotAddRequest instance
         */
        TeamRobotAddRequest.create = function create(properties) {
            return new TeamRobotAddRequest(properties);
        };

        /**
         * Encodes the specified TeamRobotAddRequest message. Does not implicitly {@link protocol.TeamRobotAddRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {protocol.ITeamRobotAddRequest} message TeamRobotAddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamRobotAddRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tId != null && message.hasOwnProperty("tId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tId);
            return writer;
        };

        /**
         * Encodes the specified TeamRobotAddRequest message, length delimited. Does not implicitly {@link protocol.TeamRobotAddRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {protocol.ITeamRobotAddRequest} message TeamRobotAddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamRobotAddRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamRobotAddRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamRobotAddRequest} TeamRobotAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamRobotAddRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamRobotAddRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamRobotAddRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamRobotAddRequest} TeamRobotAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamRobotAddRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamRobotAddRequest message.
         * @function verify
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamRobotAddRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tId != null && message.hasOwnProperty("tId"))
                if (!$util.isInteger(message.tId))
                    return "tId: integer expected";
            return null;
        };

        /**
         * Creates a TeamRobotAddRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamRobotAddRequest} TeamRobotAddRequest
         */
        TeamRobotAddRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamRobotAddRequest)
                return object;
            var message = new $root.protocol.TeamRobotAddRequest();
            if (object.tId != null)
                message.tId = object.tId | 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamRobotAddRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamRobotAddRequest
         * @static
         * @param {protocol.TeamRobotAddRequest} message TeamRobotAddRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamRobotAddRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tId = 0;
            if (message.tId != null && message.hasOwnProperty("tId"))
                object.tId = message.tId;
            return object;
        };

        /**
         * Converts this TeamRobotAddRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamRobotAddRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamRobotAddRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamRobotAddRequest;
    })();

    protocol.TeamRobotRemoveRequest = (function() {

        /**
         * Properties of a TeamRobotRemoveRequest.
         * @memberof protocol
         * @interface ITeamRobotRemoveRequest
         * @property {number|null} [tId] TeamRobotRemoveRequest tId
         * @property {number|null} [pos] TeamRobotRemoveRequest pos
         */

        /**
         * Constructs a new TeamRobotRemoveRequest.
         * @memberof protocol
         * @classdesc Represents a TeamRobotRemoveRequest.
         * @implements ITeamRobotRemoveRequest
         * @constructor
         * @param {protocol.ITeamRobotRemoveRequest=} [properties] Properties to set
         */
        function TeamRobotRemoveRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamRobotRemoveRequest tId.
         * @member {number} tId
         * @memberof protocol.TeamRobotRemoveRequest
         * @instance
         */
        TeamRobotRemoveRequest.prototype.tId = 0;

        /**
         * TeamRobotRemoveRequest pos.
         * @member {number} pos
         * @memberof protocol.TeamRobotRemoveRequest
         * @instance
         */
        TeamRobotRemoveRequest.prototype.pos = 0;

        /**
         * Creates a new TeamRobotRemoveRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {protocol.ITeamRobotRemoveRequest=} [properties] Properties to set
         * @returns {protocol.TeamRobotRemoveRequest} TeamRobotRemoveRequest instance
         */
        TeamRobotRemoveRequest.create = function create(properties) {
            return new TeamRobotRemoveRequest(properties);
        };

        /**
         * Encodes the specified TeamRobotRemoveRequest message. Does not implicitly {@link protocol.TeamRobotRemoveRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {protocol.ITeamRobotRemoveRequest} message TeamRobotRemoveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamRobotRemoveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tId != null && message.hasOwnProperty("tId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tId);
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pos);
            return writer;
        };

        /**
         * Encodes the specified TeamRobotRemoveRequest message, length delimited. Does not implicitly {@link protocol.TeamRobotRemoveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {protocol.ITeamRobotRemoveRequest} message TeamRobotRemoveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamRobotRemoveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamRobotRemoveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamRobotRemoveRequest} TeamRobotRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamRobotRemoveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamRobotRemoveRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tId = reader.int32();
                    break;
                case 2:
                    message.pos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamRobotRemoveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamRobotRemoveRequest} TeamRobotRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamRobotRemoveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamRobotRemoveRequest message.
         * @function verify
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamRobotRemoveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tId != null && message.hasOwnProperty("tId"))
                if (!$util.isInteger(message.tId))
                    return "tId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            return null;
        };

        /**
         * Creates a TeamRobotRemoveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamRobotRemoveRequest} TeamRobotRemoveRequest
         */
        TeamRobotRemoveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamRobotRemoveRequest)
                return object;
            var message = new $root.protocol.TeamRobotRemoveRequest();
            if (object.tId != null)
                message.tId = object.tId | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamRobotRemoveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamRobotRemoveRequest
         * @static
         * @param {protocol.TeamRobotRemoveRequest} message TeamRobotRemoveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamRobotRemoveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tId = 0;
                object.pos = 0;
            }
            if (message.tId != null && message.hasOwnProperty("tId"))
                object.tId = message.tId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            return object;
        };

        /**
         * Converts this TeamRobotRemoveRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamRobotRemoveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamRobotRemoveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamRobotRemoveRequest;
    })();

    protocol.TeamPosChangeRequest = (function() {

        /**
         * Properties of a TeamPosChangeRequest.
         * @memberof protocol
         * @interface ITeamPosChangeRequest
         * @property {number|null} [tId] TeamPosChangeRequest tId
         * @property {number|null} [pos] TeamPosChangeRequest pos
         */

        /**
         * Constructs a new TeamPosChangeRequest.
         * @memberof protocol
         * @classdesc Represents a TeamPosChangeRequest.
         * @implements ITeamPosChangeRequest
         * @constructor
         * @param {protocol.ITeamPosChangeRequest=} [properties] Properties to set
         */
        function TeamPosChangeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamPosChangeRequest tId.
         * @member {number} tId
         * @memberof protocol.TeamPosChangeRequest
         * @instance
         */
        TeamPosChangeRequest.prototype.tId = 0;

        /**
         * TeamPosChangeRequest pos.
         * @member {number} pos
         * @memberof protocol.TeamPosChangeRequest
         * @instance
         */
        TeamPosChangeRequest.prototype.pos = 0;

        /**
         * Creates a new TeamPosChangeRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {protocol.ITeamPosChangeRequest=} [properties] Properties to set
         * @returns {protocol.TeamPosChangeRequest} TeamPosChangeRequest instance
         */
        TeamPosChangeRequest.create = function create(properties) {
            return new TeamPosChangeRequest(properties);
        };

        /**
         * Encodes the specified TeamPosChangeRequest message. Does not implicitly {@link protocol.TeamPosChangeRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {protocol.ITeamPosChangeRequest} message TeamPosChangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamPosChangeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tId != null && message.hasOwnProperty("tId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tId);
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pos);
            return writer;
        };

        /**
         * Encodes the specified TeamPosChangeRequest message, length delimited. Does not implicitly {@link protocol.TeamPosChangeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {protocol.ITeamPosChangeRequest} message TeamPosChangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamPosChangeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamPosChangeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TeamPosChangeRequest} TeamPosChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamPosChangeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TeamPosChangeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tId = reader.int32();
                    break;
                case 2:
                    message.pos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamPosChangeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TeamPosChangeRequest} TeamPosChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamPosChangeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamPosChangeRequest message.
         * @function verify
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamPosChangeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tId != null && message.hasOwnProperty("tId"))
                if (!$util.isInteger(message.tId))
                    return "tId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            return null;
        };

        /**
         * Creates a TeamPosChangeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TeamPosChangeRequest} TeamPosChangeRequest
         */
        TeamPosChangeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TeamPosChangeRequest)
                return object;
            var message = new $root.protocol.TeamPosChangeRequest();
            if (object.tId != null)
                message.tId = object.tId | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamPosChangeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TeamPosChangeRequest
         * @static
         * @param {protocol.TeamPosChangeRequest} message TeamPosChangeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamPosChangeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tId = 0;
                object.pos = 0;
            }
            if (message.tId != null && message.hasOwnProperty("tId"))
                object.tId = message.tId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            return object;
        };

        /**
         * Converts this TeamPosChangeRequest to JSON.
         * @function toJSON
         * @memberof protocol.TeamPosChangeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamPosChangeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TeamPosChangeRequest;
    })();

    protocol.CommonItem = (function() {

        /**
         * Properties of a CommonItem.
         * @memberof protocol
         * @interface ICommonItem
         * @property {protocol.ITEM_TYPE|null} [ItemType] CommonItem ItemType
         * @property {number|null} [ItemId] CommonItem ItemId
         * @property {number|null} [ItemNum] CommonItem ItemNum
         * @property {number|Long|null} [Ext] CommonItem Ext
         * @property {protocol.ITEM_TYPE|null} [BeforeItemType] CommonItem BeforeItemType
         * @property {number|null} [BeforeItemId] CommonItem BeforeItemId
         * @property {number|null} [BeforeItemNum] CommonItem BeforeItemNum
         */

        /**
         * Constructs a new CommonItem.
         * @memberof protocol
         * @classdesc Represents a CommonItem.
         * @implements ICommonItem
         * @constructor
         * @param {protocol.ICommonItem=} [properties] Properties to set
         */
        function CommonItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonItem ItemType.
         * @member {protocol.ITEM_TYPE} ItemType
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.ItemType = 0;

        /**
         * CommonItem ItemId.
         * @member {number} ItemId
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.ItemId = 0;

        /**
         * CommonItem ItemNum.
         * @member {number} ItemNum
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.ItemNum = 0;

        /**
         * CommonItem Ext.
         * @member {number|Long} Ext
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.Ext = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonItem BeforeItemType.
         * @member {protocol.ITEM_TYPE} BeforeItemType
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.BeforeItemType = 0;

        /**
         * CommonItem BeforeItemId.
         * @member {number} BeforeItemId
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.BeforeItemId = 0;

        /**
         * CommonItem BeforeItemNum.
         * @member {number} BeforeItemNum
         * @memberof protocol.CommonItem
         * @instance
         */
        CommonItem.prototype.BeforeItemNum = 0;

        /**
         * Creates a new CommonItem instance using the specified properties.
         * @function create
         * @memberof protocol.CommonItem
         * @static
         * @param {protocol.ICommonItem=} [properties] Properties to set
         * @returns {protocol.CommonItem} CommonItem instance
         */
        CommonItem.create = function create(properties) {
            return new CommonItem(properties);
        };

        /**
         * Encodes the specified CommonItem message. Does not implicitly {@link protocol.CommonItem.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonItem
         * @static
         * @param {protocol.ICommonItem} message CommonItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemType != null && message.hasOwnProperty("ItemType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemType);
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemId);
            if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ItemNum);
            if (message.Ext != null && message.hasOwnProperty("Ext"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Ext);
            if (message.BeforeItemType != null && message.hasOwnProperty("BeforeItemType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.BeforeItemType);
            if (message.BeforeItemId != null && message.hasOwnProperty("BeforeItemId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.BeforeItemId);
            if (message.BeforeItemNum != null && message.hasOwnProperty("BeforeItemNum"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.BeforeItemNum);
            return writer;
        };

        /**
         * Encodes the specified CommonItem message, length delimited. Does not implicitly {@link protocol.CommonItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonItem
         * @static
         * @param {protocol.ICommonItem} message CommonItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonItem message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonItem} CommonItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ItemType = reader.int32();
                    break;
                case 2:
                    message.ItemId = reader.int32();
                    break;
                case 3:
                    message.ItemNum = reader.int32();
                    break;
                case 4:
                    message.Ext = reader.int64();
                    break;
                case 5:
                    message.BeforeItemType = reader.int32();
                    break;
                case 6:
                    message.BeforeItemId = reader.int32();
                    break;
                case 7:
                    message.BeforeItemNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonItem} CommonItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonItem message.
         * @function verify
         * @memberof protocol.CommonItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ItemType != null && message.hasOwnProperty("ItemType"))
                switch (message.ItemType) {
                default:
                    return "ItemType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                    break;
                }
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                if (!$util.isInteger(message.ItemId))
                    return "ItemId: integer expected";
            if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
                if (!$util.isInteger(message.ItemNum))
                    return "ItemNum: integer expected";
            if (message.Ext != null && message.hasOwnProperty("Ext"))
                if (!$util.isInteger(message.Ext) && !(message.Ext && $util.isInteger(message.Ext.low) && $util.isInteger(message.Ext.high)))
                    return "Ext: integer|Long expected";
            if (message.BeforeItemType != null && message.hasOwnProperty("BeforeItemType"))
                switch (message.BeforeItemType) {
                default:
                    return "BeforeItemType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                    break;
                }
            if (message.BeforeItemId != null && message.hasOwnProperty("BeforeItemId"))
                if (!$util.isInteger(message.BeforeItemId))
                    return "BeforeItemId: integer expected";
            if (message.BeforeItemNum != null && message.hasOwnProperty("BeforeItemNum"))
                if (!$util.isInteger(message.BeforeItemNum))
                    return "BeforeItemNum: integer expected";
            return null;
        };

        /**
         * Creates a CommonItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonItem} CommonItem
         */
        CommonItem.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonItem)
                return object;
            var message = new $root.protocol.CommonItem();
            switch (object.ItemType) {
            case "NONE":
            case 0:
                message.ItemType = 0;
                break;
            case "DIAM":
            case 1:
                message.ItemType = 1;
                break;
            case "GOLD":
            case 2:
                message.ItemType = 2;
                break;
            case "POWER":
            case 3:
                message.ItemType = 3;
                break;
            case "TOOL":
            case 4:
                message.ItemType = 4;
                break;
            case "HERO":
            case 5:
                message.ItemType = 5;
                break;
            case "MAX_RANK_SCORE":
            case 10:
                message.ItemType = 10;
                break;
            }
            if (object.ItemId != null)
                message.ItemId = object.ItemId | 0;
            if (object.ItemNum != null)
                message.ItemNum = object.ItemNum | 0;
            if (object.Ext != null)
                if ($util.Long)
                    (message.Ext = $util.Long.fromValue(object.Ext)).unsigned = false;
                else if (typeof object.Ext === "string")
                    message.Ext = parseInt(object.Ext, 10);
                else if (typeof object.Ext === "number")
                    message.Ext = object.Ext;
                else if (typeof object.Ext === "object")
                    message.Ext = new $util.LongBits(object.Ext.low >>> 0, object.Ext.high >>> 0).toNumber();
            switch (object.BeforeItemType) {
            case "NONE":
            case 0:
                message.BeforeItemType = 0;
                break;
            case "DIAM":
            case 1:
                message.BeforeItemType = 1;
                break;
            case "GOLD":
            case 2:
                message.BeforeItemType = 2;
                break;
            case "POWER":
            case 3:
                message.BeforeItemType = 3;
                break;
            case "TOOL":
            case 4:
                message.BeforeItemType = 4;
                break;
            case "HERO":
            case 5:
                message.BeforeItemType = 5;
                break;
            case "MAX_RANK_SCORE":
            case 10:
                message.BeforeItemType = 10;
                break;
            }
            if (object.BeforeItemId != null)
                message.BeforeItemId = object.BeforeItemId | 0;
            if (object.BeforeItemNum != null)
                message.BeforeItemNum = object.BeforeItemNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a CommonItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonItem
         * @static
         * @param {protocol.CommonItem} message CommonItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ItemType = options.enums === String ? "NONE" : 0;
                object.ItemId = 0;
                object.ItemNum = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Ext = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Ext = options.longs === String ? "0" : 0;
                object.BeforeItemType = options.enums === String ? "NONE" : 0;
                object.BeforeItemId = 0;
                object.BeforeItemNum = 0;
            }
            if (message.ItemType != null && message.hasOwnProperty("ItemType"))
                object.ItemType = options.enums === String ? $root.protocol.ITEM_TYPE[message.ItemType] : message.ItemType;
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                object.ItemId = message.ItemId;
            if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
                object.ItemNum = message.ItemNum;
            if (message.Ext != null && message.hasOwnProperty("Ext"))
                if (typeof message.Ext === "number")
                    object.Ext = options.longs === String ? String(message.Ext) : message.Ext;
                else
                    object.Ext = options.longs === String ? $util.Long.prototype.toString.call(message.Ext) : options.longs === Number ? new $util.LongBits(message.Ext.low >>> 0, message.Ext.high >>> 0).toNumber() : message.Ext;
            if (message.BeforeItemType != null && message.hasOwnProperty("BeforeItemType"))
                object.BeforeItemType = options.enums === String ? $root.protocol.ITEM_TYPE[message.BeforeItemType] : message.BeforeItemType;
            if (message.BeforeItemId != null && message.hasOwnProperty("BeforeItemId"))
                object.BeforeItemId = message.BeforeItemId;
            if (message.BeforeItemNum != null && message.hasOwnProperty("BeforeItemNum"))
                object.BeforeItemNum = message.BeforeItemNum;
            return object;
        };

        /**
         * Converts this CommonItem to JSON.
         * @function toJSON
         * @memberof protocol.CommonItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonItem;
    })();

    protocol.CommonUpdate = (function() {

        /**
         * Properties of a CommonUpdate.
         * @memberof protocol
         * @interface ICommonUpdate
         * @property {Array.<protocol.ICommonItem>|null} [addItemList] CommonUpdate addItemList
         * @property {Array.<protocol.ICommonItem>|null} [itemList] CommonUpdate itemList
         */

        /**
         * Constructs a new CommonUpdate.
         * @memberof protocol
         * @classdesc Represents a CommonUpdate.
         * @implements ICommonUpdate
         * @constructor
         * @param {protocol.ICommonUpdate=} [properties] Properties to set
         */
        function CommonUpdate(properties) {
            this.addItemList = [];
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonUpdate addItemList.
         * @member {Array.<protocol.ICommonItem>} addItemList
         * @memberof protocol.CommonUpdate
         * @instance
         */
        CommonUpdate.prototype.addItemList = $util.emptyArray;

        /**
         * CommonUpdate itemList.
         * @member {Array.<protocol.ICommonItem>} itemList
         * @memberof protocol.CommonUpdate
         * @instance
         */
        CommonUpdate.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new CommonUpdate instance using the specified properties.
         * @function create
         * @memberof protocol.CommonUpdate
         * @static
         * @param {protocol.ICommonUpdate=} [properties] Properties to set
         * @returns {protocol.CommonUpdate} CommonUpdate instance
         */
        CommonUpdate.create = function create(properties) {
            return new CommonUpdate(properties);
        };

        /**
         * Encodes the specified CommonUpdate message. Does not implicitly {@link protocol.CommonUpdate.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonUpdate
         * @static
         * @param {protocol.ICommonUpdate} message CommonUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addItemList != null && message.addItemList.length)
                for (var i = 0; i < message.addItemList.length; ++i)
                    $root.protocol.CommonItem.encode(message.addItemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.protocol.CommonItem.encode(message.itemList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommonUpdate message, length delimited. Does not implicitly {@link protocol.CommonUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonUpdate
         * @static
         * @param {protocol.ICommonUpdate} message CommonUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonUpdate} CommonUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.addItemList && message.addItemList.length))
                        message.addItemList = [];
                    message.addItemList.push($root.protocol.CommonItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.protocol.CommonItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonUpdate} CommonUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonUpdate message.
         * @function verify
         * @memberof protocol.CommonUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addItemList != null && message.hasOwnProperty("addItemList")) {
                if (!Array.isArray(message.addItemList))
                    return "addItemList: array expected";
                for (var i = 0; i < message.addItemList.length; ++i) {
                    var error = $root.protocol.CommonItem.verify(message.addItemList[i]);
                    if (error)
                        return "addItemList." + error;
                }
            }
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.protocol.CommonItem.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CommonUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonUpdate} CommonUpdate
         */
        CommonUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonUpdate)
                return object;
            var message = new $root.protocol.CommonUpdate();
            if (object.addItemList) {
                if (!Array.isArray(object.addItemList))
                    throw TypeError(".protocol.CommonUpdate.addItemList: array expected");
                message.addItemList = [];
                for (var i = 0; i < object.addItemList.length; ++i) {
                    if (typeof object.addItemList[i] !== "object")
                        throw TypeError(".protocol.CommonUpdate.addItemList: object expected");
                    message.addItemList[i] = $root.protocol.CommonItem.fromObject(object.addItemList[i]);
                }
            }
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".protocol.CommonUpdate.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".protocol.CommonUpdate.itemList: object expected");
                    message.itemList[i] = $root.protocol.CommonItem.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonUpdate
         * @static
         * @param {protocol.CommonUpdate} message CommonUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.addItemList = [];
                object.itemList = [];
            }
            if (message.addItemList && message.addItemList.length) {
                object.addItemList = [];
                for (var j = 0; j < message.addItemList.length; ++j)
                    object.addItemList[j] = $root.protocol.CommonItem.toObject(message.addItemList[j], options);
            }
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.protocol.CommonItem.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this CommonUpdate to JSON.
         * @function toJSON
         * @memberof protocol.CommonUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonUpdate;
    })();

    protocol.CommonHero = (function() {

        /**
         * Properties of a CommonHero.
         * @memberof protocol
         * @interface ICommonHero
         * @property {number|null} [HeroId] CommonHero HeroId
         * @property {number|null} [FightNum] CommonHero FightNum
         */

        /**
         * Constructs a new CommonHero.
         * @memberof protocol
         * @classdesc Represents a CommonHero.
         * @implements ICommonHero
         * @constructor
         * @param {protocol.ICommonHero=} [properties] Properties to set
         */
        function CommonHero(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonHero HeroId.
         * @member {number} HeroId
         * @memberof protocol.CommonHero
         * @instance
         */
        CommonHero.prototype.HeroId = 0;

        /**
         * CommonHero FightNum.
         * @member {number} FightNum
         * @memberof protocol.CommonHero
         * @instance
         */
        CommonHero.prototype.FightNum = 0;

        /**
         * Creates a new CommonHero instance using the specified properties.
         * @function create
         * @memberof protocol.CommonHero
         * @static
         * @param {protocol.ICommonHero=} [properties] Properties to set
         * @returns {protocol.CommonHero} CommonHero instance
         */
        CommonHero.create = function create(properties) {
            return new CommonHero(properties);
        };

        /**
         * Encodes the specified CommonHero message. Does not implicitly {@link protocol.CommonHero.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonHero
         * @static
         * @param {protocol.ICommonHero} message CommonHero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonHero.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HeroId != null && message.hasOwnProperty("HeroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.HeroId);
            if (message.FightNum != null && message.hasOwnProperty("FightNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FightNum);
            return writer;
        };

        /**
         * Encodes the specified CommonHero message, length delimited. Does not implicitly {@link protocol.CommonHero.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonHero
         * @static
         * @param {protocol.ICommonHero} message CommonHero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonHero.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonHero message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonHero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonHero} CommonHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonHero.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonHero();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HeroId = reader.int32();
                    break;
                case 4:
                    message.FightNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonHero message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonHero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonHero} CommonHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonHero.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonHero message.
         * @function verify
         * @memberof protocol.CommonHero
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonHero.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HeroId != null && message.hasOwnProperty("HeroId"))
                if (!$util.isInteger(message.HeroId))
                    return "HeroId: integer expected";
            if (message.FightNum != null && message.hasOwnProperty("FightNum"))
                if (!$util.isInteger(message.FightNum))
                    return "FightNum: integer expected";
            return null;
        };

        /**
         * Creates a CommonHero message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonHero
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonHero} CommonHero
         */
        CommonHero.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonHero)
                return object;
            var message = new $root.protocol.CommonHero();
            if (object.HeroId != null)
                message.HeroId = object.HeroId | 0;
            if (object.FightNum != null)
                message.FightNum = object.FightNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a CommonHero message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonHero
         * @static
         * @param {protocol.CommonHero} message CommonHero
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonHero.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.HeroId = 0;
                object.FightNum = 0;
            }
            if (message.HeroId != null && message.hasOwnProperty("HeroId"))
                object.HeroId = message.HeroId;
            if (message.FightNum != null && message.hasOwnProperty("FightNum"))
                object.FightNum = message.FightNum;
            return object;
        };

        /**
         * Converts this CommonHero to JSON.
         * @function toJSON
         * @memberof protocol.CommonHero
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonHero.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonHero;
    })();

    protocol.HeroBuyRequest = (function() {

        /**
         * Properties of a HeroBuyRequest.
         * @memberof protocol
         * @interface IHeroBuyRequest
         * @property {number|null} [heroId] HeroBuyRequest heroId
         */

        /**
         * Constructs a new HeroBuyRequest.
         * @memberof protocol
         * @classdesc Represents a HeroBuyRequest.
         * @implements IHeroBuyRequest
         * @constructor
         * @param {protocol.IHeroBuyRequest=} [properties] Properties to set
         */
        function HeroBuyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroBuyRequest heroId.
         * @member {number} heroId
         * @memberof protocol.HeroBuyRequest
         * @instance
         */
        HeroBuyRequest.prototype.heroId = 0;

        /**
         * Creates a new HeroBuyRequest instance using the specified properties.
         * @function create
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {protocol.IHeroBuyRequest=} [properties] Properties to set
         * @returns {protocol.HeroBuyRequest} HeroBuyRequest instance
         */
        HeroBuyRequest.create = function create(properties) {
            return new HeroBuyRequest(properties);
        };

        /**
         * Encodes the specified HeroBuyRequest message. Does not implicitly {@link protocol.HeroBuyRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {protocol.IHeroBuyRequest} message HeroBuyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroBuyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            return writer;
        };

        /**
         * Encodes the specified HeroBuyRequest message, length delimited. Does not implicitly {@link protocol.HeroBuyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {protocol.IHeroBuyRequest} message HeroBuyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroBuyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroBuyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroBuyRequest} HeroBuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroBuyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroBuyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroBuyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroBuyRequest} HeroBuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroBuyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroBuyRequest message.
         * @function verify
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroBuyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            return null;
        };

        /**
         * Creates a HeroBuyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroBuyRequest} HeroBuyRequest
         */
        HeroBuyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroBuyRequest)
                return object;
            var message = new $root.protocol.HeroBuyRequest();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroBuyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroBuyRequest
         * @static
         * @param {protocol.HeroBuyRequest} message HeroBuyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroBuyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.heroId = 0;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            return object;
        };

        /**
         * Converts this HeroBuyRequest to JSON.
         * @function toJSON
         * @memberof protocol.HeroBuyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroBuyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroBuyRequest;
    })();

    protocol.HeroBuyResponse = (function() {

        /**
         * Properties of a HeroBuyResponse.
         * @memberof protocol
         * @interface IHeroBuyResponse
         * @property {Array.<protocol.ICommonHero>|null} [heroListUpdate] HeroBuyResponse heroListUpdate
         * @property {protocol.ICommonUpdate|null} [commonUpdate] HeroBuyResponse commonUpdate
         */

        /**
         * Constructs a new HeroBuyResponse.
         * @memberof protocol
         * @classdesc Represents a HeroBuyResponse.
         * @implements IHeroBuyResponse
         * @constructor
         * @param {protocol.IHeroBuyResponse=} [properties] Properties to set
         */
        function HeroBuyResponse(properties) {
            this.heroListUpdate = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroBuyResponse heroListUpdate.
         * @member {Array.<protocol.ICommonHero>} heroListUpdate
         * @memberof protocol.HeroBuyResponse
         * @instance
         */
        HeroBuyResponse.prototype.heroListUpdate = $util.emptyArray;

        /**
         * HeroBuyResponse commonUpdate.
         * @member {protocol.ICommonUpdate|null|undefined} commonUpdate
         * @memberof protocol.HeroBuyResponse
         * @instance
         */
        HeroBuyResponse.prototype.commonUpdate = null;

        /**
         * Creates a new HeroBuyResponse instance using the specified properties.
         * @function create
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {protocol.IHeroBuyResponse=} [properties] Properties to set
         * @returns {protocol.HeroBuyResponse} HeroBuyResponse instance
         */
        HeroBuyResponse.create = function create(properties) {
            return new HeroBuyResponse(properties);
        };

        /**
         * Encodes the specified HeroBuyResponse message. Does not implicitly {@link protocol.HeroBuyResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {protocol.IHeroBuyResponse} message HeroBuyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroBuyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroListUpdate != null && message.heroListUpdate.length)
                for (var i = 0; i < message.heroListUpdate.length; ++i)
                    $root.protocol.CommonHero.encode(message.heroListUpdate[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate"))
                $root.protocol.CommonUpdate.encode(message.commonUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroBuyResponse message, length delimited. Does not implicitly {@link protocol.HeroBuyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {protocol.IHeroBuyResponse} message HeroBuyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroBuyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroBuyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroBuyResponse} HeroBuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroBuyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroBuyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.heroListUpdate && message.heroListUpdate.length))
                        message.heroListUpdate = [];
                    message.heroListUpdate.push($root.protocol.CommonHero.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.commonUpdate = $root.protocol.CommonUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroBuyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroBuyResponse} HeroBuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroBuyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroBuyResponse message.
         * @function verify
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroBuyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroListUpdate != null && message.hasOwnProperty("heroListUpdate")) {
                if (!Array.isArray(message.heroListUpdate))
                    return "heroListUpdate: array expected";
                for (var i = 0; i < message.heroListUpdate.length; ++i) {
                    var error = $root.protocol.CommonHero.verify(message.heroListUpdate[i]);
                    if (error)
                        return "heroListUpdate." + error;
                }
            }
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate")) {
                var error = $root.protocol.CommonUpdate.verify(message.commonUpdate);
                if (error)
                    return "commonUpdate." + error;
            }
            return null;
        };

        /**
         * Creates a HeroBuyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroBuyResponse} HeroBuyResponse
         */
        HeroBuyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroBuyResponse)
                return object;
            var message = new $root.protocol.HeroBuyResponse();
            if (object.heroListUpdate) {
                if (!Array.isArray(object.heroListUpdate))
                    throw TypeError(".protocol.HeroBuyResponse.heroListUpdate: array expected");
                message.heroListUpdate = [];
                for (var i = 0; i < object.heroListUpdate.length; ++i) {
                    if (typeof object.heroListUpdate[i] !== "object")
                        throw TypeError(".protocol.HeroBuyResponse.heroListUpdate: object expected");
                    message.heroListUpdate[i] = $root.protocol.CommonHero.fromObject(object.heroListUpdate[i]);
                }
            }
            if (object.commonUpdate != null) {
                if (typeof object.commonUpdate !== "object")
                    throw TypeError(".protocol.HeroBuyResponse.commonUpdate: object expected");
                message.commonUpdate = $root.protocol.CommonUpdate.fromObject(object.commonUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroBuyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroBuyResponse
         * @static
         * @param {protocol.HeroBuyResponse} message HeroBuyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroBuyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.heroListUpdate = [];
            if (options.defaults)
                object.commonUpdate = null;
            if (message.heroListUpdate && message.heroListUpdate.length) {
                object.heroListUpdate = [];
                for (var j = 0; j < message.heroListUpdate.length; ++j)
                    object.heroListUpdate[j] = $root.protocol.CommonHero.toObject(message.heroListUpdate[j], options);
            }
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate"))
                object.commonUpdate = $root.protocol.CommonUpdate.toObject(message.commonUpdate, options);
            return object;
        };

        /**
         * Converts this HeroBuyResponse to JSON.
         * @function toJSON
         * @memberof protocol.HeroBuyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroBuyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroBuyResponse;
    })();

    protocol.BattleEndRequest = (function() {

        /**
         * Properties of a BattleEndRequest.
         * @memberof protocol
         * @interface IBattleEndRequest
         * @property {boolean|null} [isWin] BattleEndRequest isWin
         * @property {number|null} [heroId] BattleEndRequest heroId
         * @property {protocol.BATTLE_TYPE|null} [battleType] BattleEndRequest battleType
         * @property {protocol.TEAM_TYPE|null} [teamType] BattleEndRequest teamType
         * @property {number|null} [syncState] BattleEndRequest syncState
         * @property {number|null} [skinId] BattleEndRequest skinId
         */

        /**
         * Constructs a new BattleEndRequest.
         * @memberof protocol
         * @classdesc Represents a BattleEndRequest.
         * @implements IBattleEndRequest
         * @constructor
         * @param {protocol.IBattleEndRequest=} [properties] Properties to set
         */
        function BattleEndRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleEndRequest isWin.
         * @member {boolean} isWin
         * @memberof protocol.BattleEndRequest
         * @instance
         */
        BattleEndRequest.prototype.isWin = false;

        /**
         * BattleEndRequest heroId.
         * @member {number} heroId
         * @memberof protocol.BattleEndRequest
         * @instance
         */
        BattleEndRequest.prototype.heroId = 0;

        /**
         * BattleEndRequest battleType.
         * @member {protocol.BATTLE_TYPE} battleType
         * @memberof protocol.BattleEndRequest
         * @instance
         */
        BattleEndRequest.prototype.battleType = 0;

        /**
         * BattleEndRequest teamType.
         * @member {protocol.TEAM_TYPE} teamType
         * @memberof protocol.BattleEndRequest
         * @instance
         */
        BattleEndRequest.prototype.teamType = 0;

        /**
         * BattleEndRequest syncState.
         * @member {number} syncState
         * @memberof protocol.BattleEndRequest
         * @instance
         */
        BattleEndRequest.prototype.syncState = 0;

        /**
         * BattleEndRequest skinId.
         * @member {number} skinId
         * @memberof protocol.BattleEndRequest
         * @instance
         */
        BattleEndRequest.prototype.skinId = 0;

        /**
         * Creates a new BattleEndRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {protocol.IBattleEndRequest=} [properties] Properties to set
         * @returns {protocol.BattleEndRequest} BattleEndRequest instance
         */
        BattleEndRequest.create = function create(properties) {
            return new BattleEndRequest(properties);
        };

        /**
         * Encodes the specified BattleEndRequest message. Does not implicitly {@link protocol.BattleEndRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {protocol.IBattleEndRequest} message BattleEndRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEndRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isWin);
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heroId);
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.battleType);
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.teamType);
            if (message.syncState != null && message.hasOwnProperty("syncState"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.syncState);
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.skinId);
            return writer;
        };

        /**
         * Encodes the specified BattleEndRequest message, length delimited. Does not implicitly {@link protocol.BattleEndRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {protocol.IBattleEndRequest} message BattleEndRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEndRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleEndRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleEndRequest} BattleEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEndRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleEndRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isWin = reader.bool();
                    break;
                case 2:
                    message.heroId = reader.int32();
                    break;
                case 3:
                    message.battleType = reader.int32();
                    break;
                case 4:
                    message.teamType = reader.int32();
                    break;
                case 5:
                    message.syncState = reader.int32();
                    break;
                case 6:
                    message.skinId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleEndRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleEndRequest} BattleEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEndRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleEndRequest message.
         * @function verify
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleEndRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                if (typeof message.isWin !== "boolean")
                    return "isWin: boolean expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                switch (message.battleType) {
                default:
                    return "battleType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                switch (message.teamType) {
                default:
                    return "teamType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.syncState != null && message.hasOwnProperty("syncState"))
                if (!$util.isInteger(message.syncState))
                    return "syncState: integer expected";
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                if (!$util.isInteger(message.skinId))
                    return "skinId: integer expected";
            return null;
        };

        /**
         * Creates a BattleEndRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleEndRequest} BattleEndRequest
         */
        BattleEndRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleEndRequest)
                return object;
            var message = new $root.protocol.BattleEndRequest();
            if (object.isWin != null)
                message.isWin = Boolean(object.isWin);
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            switch (object.battleType) {
            case "ALL":
            case 0:
                message.battleType = 0;
                break;
            case "CASUAL":
            case 1:
                message.battleType = 1;
                break;
            case "JUNIOR":
            case 2:
                message.battleType = 2;
                break;
            case "SENIOR":
            case 3:
                message.battleType = 3;
                break;
            }
            switch (object.teamType) {
            case "NORMAL__":
            case 0:
                message.teamType = 0;
                break;
            case "DIY":
            case 1:
                message.teamType = 1;
                break;
            }
            if (object.syncState != null)
                message.syncState = object.syncState | 0;
            if (object.skinId != null)
                message.skinId = object.skinId | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleEndRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleEndRequest
         * @static
         * @param {protocol.BattleEndRequest} message BattleEndRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleEndRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isWin = false;
                object.heroId = 0;
                object.battleType = options.enums === String ? "ALL" : 0;
                object.teamType = options.enums === String ? "NORMAL__" : 0;
                object.syncState = 0;
                object.skinId = 0;
            }
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                object.isWin = message.isWin;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                object.battleType = options.enums === String ? $root.protocol.BATTLE_TYPE[message.battleType] : message.battleType;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = options.enums === String ? $root.protocol.TEAM_TYPE[message.teamType] : message.teamType;
            if (message.syncState != null && message.hasOwnProperty("syncState"))
                object.syncState = message.syncState;
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                object.skinId = message.skinId;
            return object;
        };

        /**
         * Converts this BattleEndRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleEndRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleEndRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleEndRequest;
    })();

    protocol.BattleEndResponse = (function() {

        /**
         * Properties of a BattleEndResponse.
         * @memberof protocol
         * @interface IBattleEndResponse
         * @property {protocol.ICommonUpdate|null} [commonUpdate] BattleEndResponse commonUpdate
         * @property {Array.<protocol.ICommonHero>|null} [heroListUpdate] BattleEndResponse heroListUpdate
         */

        /**
         * Constructs a new BattleEndResponse.
         * @memberof protocol
         * @classdesc Represents a BattleEndResponse.
         * @implements IBattleEndResponse
         * @constructor
         * @param {protocol.IBattleEndResponse=} [properties] Properties to set
         */
        function BattleEndResponse(properties) {
            this.heroListUpdate = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleEndResponse commonUpdate.
         * @member {protocol.ICommonUpdate|null|undefined} commonUpdate
         * @memberof protocol.BattleEndResponse
         * @instance
         */
        BattleEndResponse.prototype.commonUpdate = null;

        /**
         * BattleEndResponse heroListUpdate.
         * @member {Array.<protocol.ICommonHero>} heroListUpdate
         * @memberof protocol.BattleEndResponse
         * @instance
         */
        BattleEndResponse.prototype.heroListUpdate = $util.emptyArray;

        /**
         * Creates a new BattleEndResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {protocol.IBattleEndResponse=} [properties] Properties to set
         * @returns {protocol.BattleEndResponse} BattleEndResponse instance
         */
        BattleEndResponse.create = function create(properties) {
            return new BattleEndResponse(properties);
        };

        /**
         * Encodes the specified BattleEndResponse message. Does not implicitly {@link protocol.BattleEndResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {protocol.IBattleEndResponse} message BattleEndResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEndResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate"))
                $root.protocol.CommonUpdate.encode(message.commonUpdate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.heroListUpdate != null && message.heroListUpdate.length)
                for (var i = 0; i < message.heroListUpdate.length; ++i)
                    $root.protocol.CommonHero.encode(message.heroListUpdate[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleEndResponse message, length delimited. Does not implicitly {@link protocol.BattleEndResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {protocol.IBattleEndResponse} message BattleEndResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEndResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleEndResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleEndResponse} BattleEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEndResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleEndResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.commonUpdate = $root.protocol.CommonUpdate.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.heroListUpdate && message.heroListUpdate.length))
                        message.heroListUpdate = [];
                    message.heroListUpdate.push($root.protocol.CommonHero.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleEndResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleEndResponse} BattleEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEndResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleEndResponse message.
         * @function verify
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleEndResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate")) {
                var error = $root.protocol.CommonUpdate.verify(message.commonUpdate);
                if (error)
                    return "commonUpdate." + error;
            }
            if (message.heroListUpdate != null && message.hasOwnProperty("heroListUpdate")) {
                if (!Array.isArray(message.heroListUpdate))
                    return "heroListUpdate: array expected";
                for (var i = 0; i < message.heroListUpdate.length; ++i) {
                    var error = $root.protocol.CommonHero.verify(message.heroListUpdate[i]);
                    if (error)
                        return "heroListUpdate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleEndResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleEndResponse} BattleEndResponse
         */
        BattleEndResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleEndResponse)
                return object;
            var message = new $root.protocol.BattleEndResponse();
            if (object.commonUpdate != null) {
                if (typeof object.commonUpdate !== "object")
                    throw TypeError(".protocol.BattleEndResponse.commonUpdate: object expected");
                message.commonUpdate = $root.protocol.CommonUpdate.fromObject(object.commonUpdate);
            }
            if (object.heroListUpdate) {
                if (!Array.isArray(object.heroListUpdate))
                    throw TypeError(".protocol.BattleEndResponse.heroListUpdate: array expected");
                message.heroListUpdate = [];
                for (var i = 0; i < object.heroListUpdate.length; ++i) {
                    if (typeof object.heroListUpdate[i] !== "object")
                        throw TypeError(".protocol.BattleEndResponse.heroListUpdate: object expected");
                    message.heroListUpdate[i] = $root.protocol.CommonHero.fromObject(object.heroListUpdate[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleEndResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleEndResponse
         * @static
         * @param {protocol.BattleEndResponse} message BattleEndResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleEndResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.heroListUpdate = [];
            if (options.defaults)
                object.commonUpdate = null;
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate"))
                object.commonUpdate = $root.protocol.CommonUpdate.toObject(message.commonUpdate, options);
            if (message.heroListUpdate && message.heroListUpdate.length) {
                object.heroListUpdate = [];
                for (var j = 0; j < message.heroListUpdate.length; ++j)
                    object.heroListUpdate[j] = $root.protocol.CommonHero.toObject(message.heroListUpdate[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleEndResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleEndResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleEndResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleEndResponse;
    })();

    protocol.BattleStartRequest = (function() {

        /**
         * Properties of a BattleStartRequest.
         * @memberof protocol
         * @interface IBattleStartRequest
         * @property {number|Long|null} [battleId] BattleStartRequest battleId
         * @property {boolean|null} [isBattleWithFriend] BattleStartRequest isBattleWithFriend
         * @property {number|null} [heroId] BattleStartRequest heroId
         * @property {number|null} [skinId] BattleStartRequest skinId
         */

        /**
         * Constructs a new BattleStartRequest.
         * @memberof protocol
         * @classdesc Represents a BattleStartRequest.
         * @implements IBattleStartRequest
         * @constructor
         * @param {protocol.IBattleStartRequest=} [properties] Properties to set
         */
        function BattleStartRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleStartRequest battleId.
         * @member {number|Long} battleId
         * @memberof protocol.BattleStartRequest
         * @instance
         */
        BattleStartRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleStartRequest isBattleWithFriend.
         * @member {boolean} isBattleWithFriend
         * @memberof protocol.BattleStartRequest
         * @instance
         */
        BattleStartRequest.prototype.isBattleWithFriend = false;

        /**
         * BattleStartRequest heroId.
         * @member {number} heroId
         * @memberof protocol.BattleStartRequest
         * @instance
         */
        BattleStartRequest.prototype.heroId = 0;

        /**
         * BattleStartRequest skinId.
         * @member {number} skinId
         * @memberof protocol.BattleStartRequest
         * @instance
         */
        BattleStartRequest.prototype.skinId = 0;

        /**
         * Creates a new BattleStartRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {protocol.IBattleStartRequest=} [properties] Properties to set
         * @returns {protocol.BattleStartRequest} BattleStartRequest instance
         */
        BattleStartRequest.create = function create(properties) {
            return new BattleStartRequest(properties);
        };

        /**
         * Encodes the specified BattleStartRequest message. Does not implicitly {@link protocol.BattleStartRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {protocol.IBattleStartRequest} message BattleStartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.battleId);
            if (message.isBattleWithFriend != null && message.hasOwnProperty("isBattleWithFriend"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isBattleWithFriend);
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.heroId);
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.skinId);
            return writer;
        };

        /**
         * Encodes the specified BattleStartRequest message, length delimited. Does not implicitly {@link protocol.BattleStartRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {protocol.IBattleStartRequest} message BattleStartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleStartRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleStartRequest} BattleStartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleStartRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.int64();
                    break;
                case 2:
                    message.isBattleWithFriend = reader.bool();
                    break;
                case 3:
                    message.heroId = reader.int32();
                    break;
                case 4:
                    message.skinId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleStartRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleStartRequest} BattleStartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleStartRequest message.
         * @function verify
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleStartRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isInteger(message.battleId) && !(message.battleId && $util.isInteger(message.battleId.low) && $util.isInteger(message.battleId.high)))
                    return "battleId: integer|Long expected";
            if (message.isBattleWithFriend != null && message.hasOwnProperty("isBattleWithFriend"))
                if (typeof message.isBattleWithFriend !== "boolean")
                    return "isBattleWithFriend: boolean expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                if (!$util.isInteger(message.skinId))
                    return "skinId: integer expected";
            return null;
        };

        /**
         * Creates a BattleStartRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleStartRequest} BattleStartRequest
         */
        BattleStartRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleStartRequest)
                return object;
            var message = new $root.protocol.BattleStartRequest();
            if (object.battleId != null)
                if ($util.Long)
                    (message.battleId = $util.Long.fromValue(object.battleId)).unsigned = false;
                else if (typeof object.battleId === "string")
                    message.battleId = parseInt(object.battleId, 10);
                else if (typeof object.battleId === "number")
                    message.battleId = object.battleId;
                else if (typeof object.battleId === "object")
                    message.battleId = new $util.LongBits(object.battleId.low >>> 0, object.battleId.high >>> 0).toNumber();
            if (object.isBattleWithFriend != null)
                message.isBattleWithFriend = Boolean(object.isBattleWithFriend);
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.skinId != null)
                message.skinId = object.skinId | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleStartRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleStartRequest
         * @static
         * @param {protocol.BattleStartRequest} message BattleStartRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleStartRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.battleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.battleId = options.longs === String ? "0" : 0;
                object.isBattleWithFriend = false;
                object.heroId = 0;
                object.skinId = 0;
            }
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (typeof message.battleId === "number")
                    object.battleId = options.longs === String ? String(message.battleId) : message.battleId;
                else
                    object.battleId = options.longs === String ? $util.Long.prototype.toString.call(message.battleId) : options.longs === Number ? new $util.LongBits(message.battleId.low >>> 0, message.battleId.high >>> 0).toNumber() : message.battleId;
            if (message.isBattleWithFriend != null && message.hasOwnProperty("isBattleWithFriend"))
                object.isBattleWithFriend = message.isBattleWithFriend;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                object.skinId = message.skinId;
            return object;
        };

        /**
         * Converts this BattleStartRequest to JSON.
         * @function toJSON
         * @memberof protocol.BattleStartRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleStartRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleStartRequest;
    })();

    protocol.BattleStartResponse = (function() {

        /**
         * Properties of a BattleStartResponse.
         * @memberof protocol
         * @interface IBattleStartResponse
         * @property {protocol.ICommonUpdate|null} [commonUpdate] BattleStartResponse commonUpdate
         */

        /**
         * Constructs a new BattleStartResponse.
         * @memberof protocol
         * @classdesc Represents a BattleStartResponse.
         * @implements IBattleStartResponse
         * @constructor
         * @param {protocol.IBattleStartResponse=} [properties] Properties to set
         */
        function BattleStartResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleStartResponse commonUpdate.
         * @member {protocol.ICommonUpdate|null|undefined} commonUpdate
         * @memberof protocol.BattleStartResponse
         * @instance
         */
        BattleStartResponse.prototype.commonUpdate = null;

        /**
         * Creates a new BattleStartResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {protocol.IBattleStartResponse=} [properties] Properties to set
         * @returns {protocol.BattleStartResponse} BattleStartResponse instance
         */
        BattleStartResponse.create = function create(properties) {
            return new BattleStartResponse(properties);
        };

        /**
         * Encodes the specified BattleStartResponse message. Does not implicitly {@link protocol.BattleStartResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {protocol.IBattleStartResponse} message BattleStartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate"))
                $root.protocol.CommonUpdate.encode(message.commonUpdate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleStartResponse message, length delimited. Does not implicitly {@link protocol.BattleStartResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {protocol.IBattleStartResponse} message BattleStartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleStartResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BattleStartResponse} BattleStartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BattleStartResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.commonUpdate = $root.protocol.CommonUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleStartResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BattleStartResponse} BattleStartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleStartResponse message.
         * @function verify
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleStartResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate")) {
                var error = $root.protocol.CommonUpdate.verify(message.commonUpdate);
                if (error)
                    return "commonUpdate." + error;
            }
            return null;
        };

        /**
         * Creates a BattleStartResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BattleStartResponse} BattleStartResponse
         */
        BattleStartResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BattleStartResponse)
                return object;
            var message = new $root.protocol.BattleStartResponse();
            if (object.commonUpdate != null) {
                if (typeof object.commonUpdate !== "object")
                    throw TypeError(".protocol.BattleStartResponse.commonUpdate: object expected");
                message.commonUpdate = $root.protocol.CommonUpdate.fromObject(object.commonUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleStartResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BattleStartResponse
         * @static
         * @param {protocol.BattleStartResponse} message BattleStartResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleStartResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.commonUpdate = null;
            if (message.commonUpdate != null && message.hasOwnProperty("commonUpdate"))
                object.commonUpdate = $root.protocol.CommonUpdate.toObject(message.commonUpdate, options);
            return object;
        };

        /**
         * Converts this BattleStartResponse to JSON.
         * @function toJSON
         * @memberof protocol.BattleStartResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleStartResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleStartResponse;
    })();

    return protocol;
})();

module.exports = $root;
